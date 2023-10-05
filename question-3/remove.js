const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

const removeLogFiles = () => {
  if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory);
    console.log('Files to delete:', files);
    
    files.forEach((file) => {
      const filePath = path.join(logsDirectory, file);
      fs.unlinkSync(filePath);
    });

    console.log('Log files are deleted.');
    fs.rmdirSync(logsDirectory);
    console.log('Logs directory are deleted.');
  } else {
    console.log('Logs directory does not exist.');
  }
};

removeLogFiles();