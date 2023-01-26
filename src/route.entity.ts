export type LatLng = { lat: number, lng: number }

export type RouteProps = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points: LatLng[]
}

export class Route {
    constructor(public props: RouteProps) { }
}

const route = new Route({
    title: 'minha rota',
    startPosition: { lat: 15, lng: 15 },
    endPosition: { lat: 20, lng: 20 },
    points: [{ lat: 15, lng: 15 }, { lat: 20, lng: 20 }]
})