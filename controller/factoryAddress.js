const { load } = require("../service/contentService.js")

function nextId () {
    const currentContent = load()
    const lastId = currentContent.reduce((prev, current) => (+prev.id > +current.id) ? prev : current, { id: 0 })
    return lastId.id + 1
}

const factoryAddress = ({ location }) => ({
    id: nextId(),
    location: location,
    amount_services: 0,
    services: []
})
module.exports = factoryAddress