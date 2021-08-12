const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

type Drink = [string, boolean, number]

const cola: [string, boolean, number] = ['brown', true, 40]
cola[0] = 'black'
// cola[1] = 'red' - error

const cola2: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const coffee: Drink = ['black', false, 0]

const carSpecs: [number, number] = [400, 3354]
const carSpecs2 = {
    horsePower: 400,
    weight: 3354
}