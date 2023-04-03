import React, { useEffect, useState } from "react"
import PointInputMap from "../Components/PointInputMap"

function AddPoint() {
  const [currentPoint, setCurrentPoint] = useState(false)

  useEffect(() => {
    console.log(currentPoint)
  }, [currentPoint])

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    let author = document.getElementById("input_author")
    let desc = document.getElementById("input_desc")

    const newReport = {
      author: author.value,
      desc: desc.value,
      latLng: currentPoint,
    }
    console.log(newReport)
    author.value = ""
    desc.value = ""
  }
  return (
    <section className="container mx-auto">
      <PointInputMap setCurrentPoint={setCurrentPoint} />
      <form
        className="grid bg-gray-300 gap-4"
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label>
          Author
          <input id="input_author" type="text" />
        </label>
        <label>
          Desc
          <input id="input_desc" type="text" />
        </label>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default AddPoint
