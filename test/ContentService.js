const contentService = require("../service/ContentService.js")

function TestRead () {
    const response = contentService.load()
    return response
}
function TestRecord () {
    const json = [
        {
            "id": 1,
            "street": "Areia Branca",
            "number": "90",
            "neighborhood": "Ponta Negra",
            "complement": "",
            "cep": "59090-280",
            "city": "Natal",
            "state": "RN",
            "amount_services": 1
        }
    ]
    return contentService.record(
        json
    )
}

console.log(typeof TestRead() == 'object')
console.log(TestRecord())