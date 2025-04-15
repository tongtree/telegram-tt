const fs = require('fs-extra');
const path = require('path');

// 获取目标目录（命令行参数或默认 'dist'）
const targetDir = process.argv[2] || 'dist';
const distDir = path.join(__dirname, '..', targetDir);

// 确保目标目录存在
fs.ensureDirSync(distDir);

// 复制 public/*
fs.copySync(path.join(__dirname, '..', 'public'), distDir, { overwrite: true });

// 复制 rlottie-wasm.wasm
fs.copySync(
  path.join(__dirname, '..', 'src', 'lib', 'rlottie', 'rlottie-wasm.wasm'),
  path.join(distDir, 'rlottie-wasm.wasm'),
  { overwrite: true }
);

// 复制 decoderWorker.min.wasm
fs.copySync(
  path.join(__dirname, '..', 'node_modules', 'opus-recorder', 'dist', 'decoderWorker.min.wasm'),
  path.join(distDir, 'decoderWorker.min.wasm'),
  { overwrite: true }
);

// 复制 emoji-data-ios/img-apple-64
fs.copySync(
  path.join(__dirname, '..', 'node_modules', 'emoji-data-ios', 'img-apple-64'),
  path.join(distDir, 'img-apple-64'),
  { overwrite: true }
);

// 复制 emoji-data-ios/img-apple-160
fs.copySync(
  path.join(__dirname, '..', 'node_modules', 'emoji-data-ios', 'img-apple-160'),
  path.join(distDir, 'img-apple-160'),
  { overwrite: true }
);

console.log(`资源已复制到 ${targetDir}`);
