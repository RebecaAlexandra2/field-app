const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

async function uploadPhoto(name: string): Promise<string> {
  await sleep(100);

  if (name.endsWith('.heic')) {
    throw new Error(`unsupported: ${name}`);
  }

  return `uploaded ${name}`;
}

async function uploadWithRetry(
  name: string,
  attempts: number,
): Promise<string> {
  if (!Number.isInteger(attempts) || attempts < 1) {
    throw new Error('attempts must be a positive integer');
  }

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await uploadPhoto(name);
    } catch (error) {
      if (attempt === attempts) throw error;

      const delay = 100 * 2 ** (attempt - 1);
      console.log(`retry ${name} in ${delay} ms`);
      await sleep(delay);
    }
  }

  throw new Error('unreachable');
}

async function settle(p: Promise<string>): Promise<string> {
  try {
    return await p;
  } catch (error) {
    const message = error instanceof Error
      ? error.message
      : String(error);

    return `failed: ${message}`;
  }
}

const names = ['a.jpg', 'b.heic', 'c.jpg'];
const results = await Promise.all(
  names.map((name) => settle(uploadPhoto(name))),
);

for (const result of results) {
  console.log(result);
}

try {
  await uploadPhoto('d.heic');
} catch (error) {
  const message = error instanceof Error
    ? error.message
    : String(error);

  console.log(`caught ${message}`);
}

console.log(await settle(uploadWithRetry('retry.heic', 4)));
console.log(await uploadWithRetry('ok.jpg', 4));

export {};