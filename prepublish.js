const fs = require('fs');
const path = require('path');

// distフォルダの内容をルートにコピー
fs.cpSync('dist', '.', { recursive: true });

// package.jsonを更新
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
delete packageJson.files;
delete packageJson.scripts.prepublishOnly;
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

// READMEとLICENSEをコピー（存在する場合）
if (fs.existsSync('README.md')) fs.copyFileSync('README.md', 'dist/README.md');
if (fs.existsSync('LICENSE')) fs.copyFileSync('LICENSE', 'dist/LICENSE');