
// Instructions to other classes how to be an argument for 'addMarker'
interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}


export class CustomMap {

    private googleMap: google.maps.Map

    constructor(mapDivID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(mapDivID), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMaker(mappable: Mappable): void {

        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }
}