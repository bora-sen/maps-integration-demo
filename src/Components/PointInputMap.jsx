import React from "react"
import { loader } from "./Map/Components/loader"

function PointInputMap({ setCurrentPoint }) {
  window.addEventListener("DOMContentLoaded", () => {
    async function initMap() {
      const resp = await loader.load()
      const { Map } = await resp.maps.importLibrary("maps")

      const map = new Map(document.getElementById("map"), {
        center: { lat: 39.925534, lng: 32.866286 },
        zoom: 11,
      })

      const marker = new resp.maps.Marker({
        position: null,
      })

      //console.log(marker)

      map.addListener("click", (e) => {
        let lat = e.latLng.lat()
        let lng = e.latLng.lng()
        marker.setMap(null)
        marker.position = { lat, lng }
        setCurrentPoint({ lat, lng })
        //console.log({ lat, lng })
        marker.setMap(map)
      })

      //console.log(map)
    }
    initMap()
  })
  return <div id="map" className="w-full h-[24rem]"></div>
}

export default PointInputMap
