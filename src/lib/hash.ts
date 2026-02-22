export async function calculateEpubHash(buffer: Uint8Array): Promise<string> {
  const uint8 = new Uint8Array(buffer);
  const hashBuffer = await crypto.subtle.digest(
    'SHA-256',
    uint8.buffer as ArrayBuffer,
  );
  const result = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return result;
}
/* 
const arrayBuffer = await file.arrayBuffer();
const uint8Array = new Uint8Array(arrayBuffer);
*/
