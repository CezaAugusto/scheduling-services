const fs = require("fs")
const filePath = "./models/content.json"

function record (content) {
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(filePath, contentString)
}
function load () {
    const fileBuffer = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileBuffer)
}

module.exports = {
    record,
    load
}