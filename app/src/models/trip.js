export default class Trip {
  constructor({ place, route, timestamp }) {
    this.place = place;
    this.route = route;
    this.timestamp = timestamp;
  }

  get place() {
    return this.place;
  }

  set place(place) {
    this.place = place;
  }

  get route() {
    return this.route;
  }

  set route(route) {
    this.route = route;
  }

  get timestamp() {
    return this.timestamp;
  }

  set timestamp(timestamp) {
    this.timestamp = timestamp;
  }
}
