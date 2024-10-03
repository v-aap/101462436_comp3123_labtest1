const fs = require('fs');
const path = require('path');

function removeLogs() {
    const logDir = path.join(__dirname, 'Logs');
    if (fs.existsSync(logDir)) {
        fs.readdirSync(logDir).forEach(file => {
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(path.join(logDir, file));
        });
        fs.rmdirSync(logDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

removeLogs();
