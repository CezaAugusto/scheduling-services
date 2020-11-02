const contentService = require("../service/contentService.js")
const AddressController = require("../controller/AddressController")
const ServiceController = require("../controller/ServiceController")

function TestReadAddresses () {
    const addressController = new AddressController()
    const response = addressController.all()
    return response
}

function TestGetServicesAddress () {
    const addressController = new AddressController()
    const response = addressController.getAddress(1)
    return response
}
function TestRecordAddress () {
    const addressController = new AddressController()
    const json = {
        "location": "Avenida 10, 1345, Centro, Amazonas - AM"
    }
    return addressController.create(
        json
    )
}
function TestSaveServices () {
    const serviceController = new ServiceController()
    const json = {
        execution_date: "2020-10-31",
        initial_tech: 1,
        maint_tech: 5,
        amount_vehicle: 3,
        appointment: "06:00",
        turn: "Morning"
    }

    return serviceController.create(1, json)
}
function TestUpdateAddress () {
    const addressController = new AddressController()
    const json = {
        "location": "Avenida 500, 1345, Centro, Amazonas - AM"
    }
    return addressController.update(1, json)
}
function TestUpdateServices () {
    const serviceController = new ServiceController()
    const json = {
        execution_date: "2020-10-31",
        initial_tech: 1,
        maint_tech: 5,
        amount_vehicle: 3,
        appointment: "06:00",
        turn: "Afternoon"
    }
    return serviceController.update(1, 1, json)
}
function TestDeleteAddress () {
    const addressController = new AddressController()
    return addressController.delete(1)
}
function TestDeleteService () {
    const serviceController = new ServiceController()
    return serviceController.delete(1, 1)
}

// console.log(TestReadAddresses())
// console.log(TestGetServicesAddress())
// console.log(TestRecordAddress())
// console.log(TestSaveServices())
// console.log(TestUpdateAddress())
// console.log(TestUpdateServices())
// console.log(TestDeleteAddress())
console.log(TestDeleteService())