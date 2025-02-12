const qrcode = require('qrcode-terminal');
const internalIp = require('internal-ip');

(async () => {
  // Get your local IPv4 address
  const ip = await internalIp.v4();
  // Define the port your app is running on (e.g., 3000)
  const port = 3000;
  const url = `http://${ip}:${port}`;
  
  // Log the URL
  console.log(`Access your app at: ${url}`);
  
  // Generate and print the QR code in the terminal
  qrcode.generate(url, { small: true }, qr => {
    console.log(qr);
  });
})();
