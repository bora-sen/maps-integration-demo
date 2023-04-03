import React from "react"
import Map from "./Map/index"

function MapCard() {
  return (
    <div className="w-full h-[32rem]">
      <Map />
      <form>
        <input type="text" />
        <input type="button" value="Eklenecek Title" />
      </form>
    </div>
  )
}

export default MapCard
