'use strict'

const factoryAddress = require('./factoryAddress.js')
const { save, load } = require("../service/contentService.js")

class AddressController {

    all () {
        try {
            const currentContent = load()
            return currentContent
        } catch (err) {
            return err
        }
    }

    create (content) {
        try {
            const currentContent = load()
            const newAddress = factoryAddress(content)
            currentContent.push(newAddress)
            return save(currentContent)
        } catch (err) {
            return err
        }
    }
    getAddress (id) {
        try {
            const currentContent = load()
            const address = currentContent.find(element => element.id == id)
            return address
        } catch (err) {
            return err
        }
    }
    update (id, content) {
        try {
            const currentContent = load()
            const index = currentContent.findIndex((element => element.id == id))
            currentContent[index] = Object.assign({}, currentContent[index], content)
            return save(currentContent)
        } catch (err) {

        }
    }
    delete (id) {
        try {
            const currentContent = load()
            const filteredContent = currentContent.filter(item => item.id != id)
            return save(filteredContent)
        } catch (err) {
            return err
        }
    }
}

module.exports = AddressController