/*pk.eyJ1IjoiY2FsaWNoZTJkYSIsImEiOiJjazJsOXExeXcwNHN6M25qcHc3azZlcWFkIn0.kBsvG_K1nJP1SorRSsGDAA*/

mapboxgl.accessToken =  'pk.eyJ1IjoiY2FsaWNoZTJkYSIsImEiOiJjazJsOXExeXcwNHN6M25qcHc3azZlcWFkIn0.kBsvG_K1nJP1SorRSsGDAA'

let map = new mapboxgl.Map({
	
	container: 'map',
	style: 'mapbox://styles/caliche2da/ck5y73w602s781imjp963gs4y',
	center:[-98.3121805,26.0523513],
	zoom:15
	})

let element = document.createElement('div')
element.className = 'marker'


let marker = new mapboxgl.Marker(element)
.setLngLat({
	lng:-98.3121805,
	lat:26.0523513
	})
.addTo(map)
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();