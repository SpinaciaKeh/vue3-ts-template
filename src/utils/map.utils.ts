import { Map, View } from 'ol'

class MapObj {
  readonly _map

  constructor(target: string, options: Record<string, string | number>) {
    this._map = new Map({
      target: document.getElementById(target),
      layers: [],
      view: new View({
        center: options.center,
        zoom: options.zoom
      })
    })
  }

  get map() {
    return this._map
  }

  // TODO: something here
}

export default MapObj
