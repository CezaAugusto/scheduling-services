```diff
# Recieve request   

! returns function getForcaByDay
- getForcaDisponivel

! returns date validation
- verificarForca

## Analysis Functions

! returns a array of objects of technical workforce per shift
- getForcaTotal

! returns an object to assemble the workforce calendar
- getForcaByDay

! called by verificarForca and returns an object with status and date
- verificarForcaPorServico

! search for the best date adding and subtracting days within a defined range
- encontrarMelhorDia

## Process Date

! returns the current date with increment of days
- addDays

! returns the current date with formatting
- formatDate

## Query Functions

! returns the workforce already used
- getHorasOcupadas

! returns the amount of technicians per shift
- getTecnicoByTurno

! returns the amount of cars defined in the parameters
- getCarrosParam

! returns scheduled time as shift
- getTurnoByHora

! check holiday in calendar
- verificarFeriado

! check date is included on the selected days of the week
- verificarDiaDeSemana
```