const path = require('path')
const minimist = require('minimist');
const numCPUs = require('os').cpus().length;

const getHtml = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'info.html'));
}

const getData = (req, res) => {
    const keys = Object.keys(minimist(process.argv));
    const values = Object.values(minimist(process.argv));
    let processArgs = []
    for (let index = 0; index < keys.length; index++) {
        processArgs[index] = keys[index] + ': ' + values[index]
    }

    const object = {
        processArguments: processArgs.slice(1),
        platform: process.platform,
        nodeVersion: process.version,
        memory: process.memoryUsage().rss,
        execPath: process.execPath,
        id: process.pid,
        mainFolder: process.cwd(),
        numberOfCPU: numCPUs
    }
    res.status(200).json({ data: object })
}

module.exports = {
    getHtml,
    getData
}