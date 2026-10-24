import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb;
import 'package:flutter/material.dart';

class Building {
  final String id;
  final String address;
  final int? floors;
  final int? elevators;

  const Building({
    required this.id,
    required this.address,
    this.floors,
    this.elevators,
  });
}

String describe(Building b) {
  final floors = b.floors ?? 'unknown';
  final elevators = b.elevators ?? 'unknown';

  return '${b.address}: $floors floors, elevators $elevators';
}

void main() => runApp(const FieldApp());

class FieldApp extends StatelessWidget {
  const FieldApp({super.key});

  @override
  Widget build(BuildContext context) {
    final platform = kIsWeb ? 'web' : defaultTargetPlatform.name;

    const building = Building(
      id: 'b-17',
      address: 'Str. Lipscani 12',
      floors: 4,
    );

    return MaterialApp(
      title: 'Rebeca Alexandra',
      home: Scaffold(
        appBar: AppBar(title: const Text('Rebeca Alexandra')),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('Hello from Flutter on $platform'),
                const SizedBox(height: 8),
                Text(
                  describe(building),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}