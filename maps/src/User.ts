import faker from 'faker'

export const name = 'raz'

export class User {
    name: string
    location: {
        lat: number
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}