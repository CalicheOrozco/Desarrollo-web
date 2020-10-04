/*pk.eyJ1IjoiY2FsaWNoZTJkYSIsImEiOiJjazJsOXExeXcwNHN6M25qcHc3azZlcWFkIn0.kBsvG_K1nJP1SorRSsGDAA*/

mapboxgl.accessToken =  'pk.eyJ1IjoiY2FsaWNoZTJkYSIsImEiOiJjazJsOXExeXcwNHN6M25qcHc3azZlcWFkIn0.kBsvG_K1nJP1SorRSsGDAA'

let map = new mapboxgl.Map({
	
	container: 'map',
	style: 'mapbox://styles/caliche2da/ck7v4e77m04qt1imkdwszzyyd',
	center:[-96.1147095,19.1590592],
	zoom:16
	})

let element = document.createElement('div')
element.className = 'marker'


let marker = new mapboxgl.Marker(element)
.setLngLat({
	lng:-96.1147095,
	lat:19.1590592
	})
.addTo(map)
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();