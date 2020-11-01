const fs = require("fs")
const factoryAddress = require('./FactoryAddress')
const factoryService = require('./FactoryService')
const filePath = "./models/content.json"

function save (content) {
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(filePath, contentString)
}
function nextIdAddress () {
    const currentContent = load()
    const lastAddressId = currentContent.reduce((prev, current) => (+prev.id > +current.id) ? prev : current, { id: 0 })
    return lastAddressId.id + 1
}
function nextIdService (id_address) {
    const address = getAddress(id_address)
    const lastServiceId = address.services.reduce((prev, current) => (+prev.id > +current.id) ? prev : current, { id: 0 })
    return lastServiceId.id + 1
}
function saveAddress (content) {
    const newAddress = factoryAddress({ id: nextIdAddress() }, content)
    const currentContent = load()
    currentContent.push(newAddress)
    return save(currentContent)
}
function saveService (id_address, content) {
    const newService = factoryService({ id: nextIdService(id_address) }, content)
    const currentContent = load()
    currentContent.find(element => {
        if (element.id == id_address) {
            element.services.push(newService)
            element.amount_services++
            return save(currentContent)
        }
    })
}
function getAddress (id_address) {
    const currentContent = load()
    const address = currentContent.find(element => element.id == id_address)
    return address
}
function load () {
    const fileBuffer = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileBuffer)
}

module.exports = {
    saveAddress,
    saveService,
    getAddress,
    load
}