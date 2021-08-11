const colors: string[] = ['red', 'green', 'yellow']

const dates = [new Date(), new Date()]

const fruitsByColor = [
    ['tomato'],
    ['apple'],
    ['lemon']
]

const fruitsByColor2: string[][] = []

// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const color = colors[0]
const color1 = colors.pop()

// PREVENT INCOMPATIBLE VALUES
// colors.push(true) - error


// HELP WITH MAP
colors.map((color: string): string => {
    return color
})

// FLEXIBLE TYPES
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2021-11-11')
importantDates.push(new Date())
// importantDates.push(1) - error
