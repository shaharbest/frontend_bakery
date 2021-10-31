import React from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'images/marker-icon-2x.png',
  iconUrl: 'images/marker-icon.png',
  shadowUrl: 'images/marker-shadow.png',
})

function AboutMap() {
  const position = [32.7624806, 34.9681203]

  return (
    <MapContainer
      center={position}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: '400px' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Shahar <br /> Bakery
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default AboutMap
