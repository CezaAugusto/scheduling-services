'use strict'

const { save, load } = require("../service/contentService.js")
const factoryService = require('./factoryService.js')
const serviceFilePath = "./contents/service.json"
const generalFilePath = "./contents/general.json"

class ServiceController {
    all () {
        try {
            const currentContent = load(serviceFilePath)
            return currentContent
        } catch (err) {
            return err
        }
    }

    create (content) {
        try {
            const currentContent = load(serviceFilePath)
            currentContent.push(factoryService(content))
            return save(serviceFilePath, currentContent)
        } catch (err) {
            return err
        }
    }
    update (id, content) {
        try {
            const currentContent = load(serviceFilePath)
            const indexService = currentContent.findIndex((element => element.id == id))
            currentContent[indexService] = Object.assign({}, currentContent[indexService], content)
            return save(serviceFilePath, currentContent)
        } catch (err) {

        }
    }
    delete (id) {
        try {
            let currentContent = load(serviceFilePath)
            currentContent = currentContent.filter(item => item.id != id)
            return save(serviceFilePath, currentContent)
        } catch (err) {
            return err
        }
    }

    calculeRemainingWorkForceForDay (day) {
        try {
            let currentContent = load(serviceFilePath)
            let generalConfig = load(generalFilePath)
            const usedWorkForce = currentContent.reduce((prev, current) => {
                const formatScheduledDate = new Date(current.scheduled_date)
                if (formatScheduledDate.getDay() == day) {
                    return current.workforce + prev
                }
            }, 0)
            return generalConfig.workforce - usedWorkForce
        } catch (err) {
            return err
        }
    }
}

module.exports = ServiceController
