const fs = require('fs');
const path = require('path');

function createLogs() {
    const logDir = path.join(__dirname, 'Logs');
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }
    
    process.chdir(logDir);
    
    for (let i = 0; i < 10; i++) {
        const logFileName = `log${i}.txt`;
        fs.writeFileSync(logFileName, `This is log file ${i}`);
        console.log(`Created file: ${logFileName}`);
    }
}

createLogs();
