class Vehicle {
    // public drive(): void {
    //     console.log(`I'm driving`)
    // }

    // constructor(color: string) {
    //     this.color = color
    // }
    //
    // color: string

    constructor(public color: string) {

    }

    public stop(): void {
        console.log(`I've stopped!`)
    }
    protected beep(): void {
        console.log('Beeeep!')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }
    private drive(): void {
        console.log(`I'm a car and I'm driving`)
    }
    startDrivingProcess(): void {
        this.drive()
        this.beep()
    }

}


const vehicle = new Vehicle('black')
console.log(vehicle.color)
// vehicle.drive()
// vehicle.stop()

const car = new Car(4,'black')
// car.startDrivingProcess()
// car.stop()
