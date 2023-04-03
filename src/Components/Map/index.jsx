import React from "react"
import { loader } from "./Components/loader"
import { reports } from "../../dataset.json"
import MarkerContent from "./Components/MarkerContent"
import { renderToString } from "react-dom/server"

function Map() {
  window.addEventListener("DOMContentLoaded", () => {
    async function initMap() {
      const resp = await loader.load()
      const { Map } = await resp.maps.importLibrary("maps")

      const map = new Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 39.925533, lng: 32.866287 },
      })

      //console.log(reports)

      reports.map((report) => {
        const newInfoWindow = new resp.maps.InfoWindow({
          content: renderToString(<MarkerContent report={report} />),
        })
        const newMarker = new resp.maps.Marker({
          map: map,
          position: report.latLng,
          title: report.title,
          label: report.author,
          optimized: true,
          size: 5,
        })
        //console.log(newMarker)

        newMarker.addListener("click", (e) => {
          //console.log(e)
          newInfoWindow.open({
            anchor: newMarker,
          })
        })
      })
    }
    initMap()
  })

  return <div id="map" className="w-full h-full"></div>
}

export default Map
