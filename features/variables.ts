let oranges: number = 5
// oranges = 'raz' - error
// const oranges2: number = 'raz' - error

let speed: string = 'fast'
// speed: string = 3 - error

let hasDog: boolean = true
let nothing: null = null
let nothing1: undefined = undefined

// BUILT-IN OBJECTS
let now: Date = new Date()

// ARRAY

let colors: string[] = ['red', 'green', 'blue']
let numbers: number[] = [1, 2, 3, 4, 5]
let results: boolean[] = [true, false, false, true]


// CLASSES

class Car {

}

let car: Car = new Car()


// OBJECT LITERAL

let point: { x: number, y: number } = {
    // x: true, - error
    // a: 5, - error
    x: 10,
    y: 20
}

// FUNCTIONS
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// WHEN TO USE TYPE ANNOTATIONS
// 1) FUNCTION RETURNS TYPE 'any'

const json = '{"x": 10, "y": 20}'
const coordinates: { x: number, y: number } = JSON.parse(json)
console.log(coordinates) // {x: 10, y: 20}
// coordinates.foo() TS doesn't show error


// WHEN WE DECLARE A VARIABLE ON ONE LINE AND INITIALIZE IT LATER
let words = ['one', 'two', 'three']
let isTwo: boolean

for(let i = 0; i < words.length; i++){
    if(words[i] === 'two') {
        isTwo = true
    }
}

console.log(isTwo)


// 3) Variables whoes type can't be inferred

let myNumbers = [1, -10, 2, -1]
let positiveNumbers: number | boolean

for(let i = 0; i < myNumbers.length; i++ ){
    if(myNumbers[i] > 0) {
        positiveNumbers = myNumbers[i]
    } else if(myNumbers[i] = 0) {
        positiveNumbers = 0
    } else {
        positiveNumbers = false
    }
}

console.log(positiveNumbers)

