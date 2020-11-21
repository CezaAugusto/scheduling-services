const { load } = require("../service/contentService.js")
const serviceFilePath = "./contents/service.json"

function nextId () {
    const currentContent = load(serviceFilePath)
    const lastId = currentContent.reduce((prev, current) => (+prev.id > +current.id) ? prev : current, { id: 0 })
    return lastId.id + 1
}

const factoryService = ({ scheduled_date, workforce, turn }) => ({
    id: nextId(),
    scheduled_date,
    workforce,
    turn
})

module.exports = factoryService