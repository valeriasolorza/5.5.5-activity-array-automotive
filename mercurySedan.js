//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassangers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger(num) {
        if (num >= this.maxPassangers)
            this.passengers = num
        return 
    }

    start() {
        if (this.fuel > 0) {
            console.log('engine has started')
            this.started = true
        }

        else {
            console.log('please add fuel')
            this.started = fasle
        }
        return this.started
    }

    checkService() {
        if (this.milage > 30000) {
            console.log('needs service')
            this.scheduleService = true
        }
        else{
            console.log('all good')
        }
        return this.scheduleService
    }

}

let myCar = new Car(Mercury, a28, 1999, red, 65000)

myCar.start()
myCar.checkService()
myCar.loadPassanger()



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
