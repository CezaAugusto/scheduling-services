const { load } = require("../service/contentService.js")

function nextId (id_address) {
    const currentContent = load()
    const address = currentContent.find(item => item.id == id_address)
    const lastId = address.services.reduce((prev, current) => (+prev.id > +current.id) ? prev : current, { id: 0 })
    return lastId.id + 1
}

const factoryService = (id_address, { execution_date, initial_tech, maint_tech, amount_vehicle, appointment, turn }) => ({
    id: nextId(id_address),
    execution_date,
    initial_tech,
    maint_tech,
    amount_vehicle,
    appointment,
    turn
})

module.exports = factoryService