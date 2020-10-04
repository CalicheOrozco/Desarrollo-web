/*pk.eyJ1IjoiY2FsaWNoZTJkYSIsImEiOiJjazJsOXExeXcwNHN6M25qcHc3azZlcWFkIn0.kBsvG_K1nJP1SorRSsGDAA*/

mapboxgl.accessToken =  'pk.eyJ1IjoiY2FsaWNoZTJkYSIsImEiOiJjazJsOXExeXcwNHN6M25qcHc3azZlcWFkIn0.kBsvG_K1nJP1SorRSsGDAA'

let map = new mapboxgl.Map({
	
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center:[-96.1611531,19.198839],
	zoom:15
	})

let element = document.createElement('div')
element.className = 'marker'


let marker = new mapboxgl.Marker(element)
.setLngLat([-96.161272,19.199527])
.addTo(map)
map.addControl(new mapboxgl.NavigationControl());