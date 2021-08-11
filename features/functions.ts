const add = (a: number, b: number): number => {
    return a + b
}

// const add2 = (a: number, b: number): number => {
//     return 'test string' - error
// }

const add3 = (a: number, b: number) => {
    return a + b
}

const subtract = (a: number, b: number) => {
    // type void
    // a - b
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: string): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
    // return null - you can return null or undefined
}

const throwError = (message: string): string => {
    if (!message) {
        throw new Error(message)
    }
    return message
}

const throwError2 = (message: string): void => {d
    if (!message) {
        throw new Error(message)
    }
}

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}) => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

logWeather(todayWeather)

//es2015
const logWeather2 = ({date, weather}: {date: Date, weather: string}) => {
    console.log(date)
    console.log(weather)
}