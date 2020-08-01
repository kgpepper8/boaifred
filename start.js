console.log("Press CTRL-C to stop")
console.log("Go to http://127.0.0.1:8080 in your web browser")
const { exec } = require('child_process');
exec('./node_modules/http-server/bin/http-server', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
