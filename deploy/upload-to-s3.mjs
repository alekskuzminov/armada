import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readdir, readFile, stat } from 'fs/promises';
import { join, relative } from 'path';
import { lookup } from 'node:dns'; // not used, just mime below

const ENDPOINT = 'https://s3.ru1.storage.beget.cloud';
const BUCKET = 'decff4bdb6bc-armada-media';
const LOCAL_DIR = './public/images';
const S3_PREFIX = 'images';

const MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

const client = new S3Client({
  endpoint: ENDPOINT,
  region: 'ru-1',
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
  forcePathStyle: true,
});

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = join(dir, entry.name);
    return entry.isDirectory() ? getFiles(fullPath) : fullPath;
  }));
  return files.flat();
}

async function upload() {
  const files = await getFiles(LOCAL_DIR);
  console.log(`Found ${files.length} files to upload...`);

  for (const file of files) {
    const ext = file.slice(file.lastIndexOf('.')).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';
    const relativePath = relative('./public', file).replace(/\\/g, '/');
    const key = relativePath;
    const body = await readFile(file);

    try {
      await client.send(new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: body,
        ContentType: contentType,
        // ACL: 'public-read', // disabled for testing
        CacheControl: 'public, max-age=2592000',
      }));
      console.log(`✓ ${key}`);
    } catch (err) {
      console.error(`✗ ${key}:`);
      console.error(err);
      break;
    }
  }

  console.log('\nDone! Images available at:');
  console.log(`https://buelifmopuduegur.begetcdn.cloud/images/`);
}

upload();
