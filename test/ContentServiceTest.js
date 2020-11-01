const contentService = require("../service/ContentService.js")

function TestRead () {
    const response = contentService.load()
    return response
}

function TestGetServicesAddress () {
    const response = contentService.getAddress()
    return response
}
function TestRecordAddress () {
    const json = {
        "location": "Avenida 10, 1345, Centro, Amazonas - AM"
    }
    return contentService.saveAddress(
        json
    )
}
function TestSaveServices () {
    const json = {
        execution_date: "2020-10-31",
        initial_tech: 1,
        maint_tech: 5,
        amount_vehicle: 3,
        appointment: "06:00",
        turn: "Morning"
    }

    return contentService.saveService(1, json)
}

console.log(typeof TestRead() == 'object')
console.log(TestGetServicesAddress())
console.log(TestRecordAddress())
console.log(TestSaveServices())