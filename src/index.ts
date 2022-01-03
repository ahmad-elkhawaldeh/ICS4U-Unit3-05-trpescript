/*
* This program is a vehicle class.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-25
*/

class Vehicle {
  // this is a  class.
  private _speed: number
  private _maxSpeed: number
  private _doorNum: number
  private _colour: string
  private _licensePlate: string

  constructor (inicialColour: string, inicialPlate: string,
    inicialDoor: number, topspeed: number) {
    this._colour = inicialColour
    this._licensePlate = inicialPlate
    this._doorNum = inicialDoor
    this._maxSpeed = topspeed
    this._speed = 0
  }

  public get speed () {
    return this._speed
  }

  public get maxSpeed () {
    return this._maxSpeed
  }

  public get doorNum () {
    return this._doorNum
  }

  public get colour () {
    return this._colour
  }

  public get licensePlate () {
    return this._licensePlate
  }

  public set colour (param: string) {
    this._colour = param
  }

  public set licensePlate (param: string) {
    this._licensePlate = param
  }

  public status () {
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    '\nNumber of doors: ' + this._doorNum +
                    '\nLicense Plate: ' + this._licensePlate + '\nColour: ' +
                    this._colour)
  }

  public accelerate (accPow: number, accTime: number) {
    this._speed = (accPow * accTime) + this._speed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  public break (breakPow: number, breakTime: number) {
    this._speed = this._speed - (breakPow * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}

const bmw = new Vehicle('white', 'B40-C4RR0', 4, 200)

console.log('Created Bmw\nStatus:\n')
bmw.status()

console.log('\nAccelerating, 10 of power for 10 sec.')
bmw.accelerate(10, 10)
console.log('New speed: ' + bmw.speed)

console.log('\nChanging colour to blue:')
bmw.colour = 'blue'
console.log('New colour:' + bmw.colour)

const lamborghini = new Vehicle('red', 'AER-783', 2, 400)

console.log('Created a lamborghini\nStatus:\n')
lamborghini.status()

console.log('\nAccelerating, 100 of power for 4 sec.')
lamborghini.accelerate(100, 4)
console.log('New speed: ' + lamborghini.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
lamborghini.accelerate(10, 10)
console.log('New speed: ' + lamborghini.speed)

console.log('\nChanging license plate:')
lamborghini.licensePlate = 'GGyt456'
console.log('New licensePlate: ' + lamborghini.licensePlate)

console.log('\nDone.')
