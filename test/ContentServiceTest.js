const ServiceController = require("../controller/ServiceController")

function TestSaveServices () {
    const serviceController = new ServiceController()
    const json = {
        scheduled_date: "2020-10-31",
        workforce: 3,
        turn: "Morning"
    }
    return serviceController.create(json)
}

function TestUpdateServices () {
    const serviceController = new ServiceController()
    const json = {
        scheduled_date: "2020-10-31",
        workforce: 1,
        turn: "Afternoon"
    }
    return serviceController.update(json)
}

function TestDeleteService () {
    const serviceController = new ServiceController()
    return serviceController.delete(2)
}

function calculeRemainingWorkForceForDay () {
    const serviceController = new ServiceController()
    return serviceController.calculeRemainingWorkForceForDay(5)
}

// console.log(TestSaveServices())
// console.log(TestUpdateServices())
// console.log(TestDeleteService())
console.log(calculeRemainingWorkForceForDay())