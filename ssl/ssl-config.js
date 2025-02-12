const fs = require('fs');
const path = require('path');

module.exports = {
  key: fs.readFileSync(path.join(__dirname, 'private.key')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate.crt')),
  ca: fs.readFileSync(path.join(__dirname, 'ca_bundle.crt'))
}; 