const FactoryService = ({ id }, { execution_date, initial_tech, maint_tech, amount_vehicle, appointment, turn }) => ({
    id,
    execution_date,
    initial_tech,
    maint_tech,
    amount_vehicle,
    appointment,
    turn
})

module.exports = FactoryService