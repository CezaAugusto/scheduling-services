const fs = require("fs")

function save (filePath, content) {
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(filePath, contentString)
}
function load (filePath) {
    const fileBuffer = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileBuffer)
}

module.exports = {
    save,
    load
}