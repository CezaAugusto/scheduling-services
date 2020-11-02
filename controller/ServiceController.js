'use strict'

const { save, load } = require("../service/contentService.js")
const factoryService = require('./factoryService.js')

class ServiceController {
    all () {
        try {
            const currentContent = load()
            return currentContent
        } catch (err) {
            return err
        }
    }

    create (id_address, content) {
        try {
            const currentContent = load()
            const newService = factoryService(id_address, content)
            const index = currentContent.findIndex((element => element.id == id_address))
            currentContent[index].services.push(newService)
            currentContent[index].amount_services++
            return save(currentContent)
        } catch (err) {
            return err
        }
    }
    update (id_address, id_service, content) {
        try {
            const currentContent = load()
            const indexAddress = currentContent.findIndex((element => element.id == id_address))
            const indexService = currentContent[indexAddress].services.findIndex((element => element.id == id_service))
            const service = currentContent[indexAddress].services[indexService]
            currentContent[indexAddress].services[indexService] = Object.assign({}, service, content)
            return save(currentContent)
        } catch (err) {

        }
    }
    delete (id_address, id_service) {
        try {
            const currentContent = load()
            const indexAddress = currentContent.findIndex((element => element.id == id_address))
            currentContent[indexAddress].services = currentContent[indexAddress].services.filter(item => item.id != id_service)
            return save(currentContent)
        } catch (err) {
            return err
        }
    }
}

module.exports = ServiceController
