Future<String> uploadPhoto(String name) async {
  await Future<void>.delayed(const Duration(milliseconds: 100));

  if (name.endsWith('.heic')) {
    throw FormatException('unsupported: $name');
  }

  return 'uploaded $name';
}

Future<String> uploadWithRetry(String name, int attempts) async {
  if (attempts < 1) {
    throw ArgumentError('attempts must be a positive integer');
  }

  for (var attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await uploadPhoto(name);
    } on FormatException {
      if (attempt == attempts) rethrow;

      final delay = 100 * (1 << (attempt - 1));
      print('retry $name in $delay ms');
      await Future<void>.delayed(Duration(milliseconds: delay));
    }
  }

  throw StateError('unreachable');
}

Future<String> settle(Future<String> future) async {
  try {
    return await future;
  } on FormatException catch (error) {
    return 'failed: ${error.message}';
  }
}

Future<void> main() async {
  final names = ['a.jpg', 'b.heic', 'c.jpg'];

  final results = await Future.wait(
    names.map((name) => settle(uploadPhoto(name))),
  );

  for (final result in results) {
    print(result);
  }

  try {
    await uploadPhoto('d.heic');
  } on FormatException catch (error) {
    print('caught ${error.message}');
  }

  print(await settle(uploadWithRetry('retry.heic', 4)));
  print(await uploadWithRetry('ok.jpg', 4));
}
