const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

const createLogFiles = () => {
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
    console.log('Logs directory is created.');
  }

  process.chdir(logsDirectory);

  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const content = `Log file ${i}.`;
    fs.writeFileSync(fileName, content);
    console.log(`Created log file: ${fileName}`);
  }
};

createLogFiles();
