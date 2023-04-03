function MarkerContent({ report }) {
  const { title, author, desc, latLng } = report

  return (
    <div className="flex flex-col">
      <span>{title}</span>
      <span>{author}</span>
      <span>{desc}</span>
      <span>{`lat-> ${latLng.lat} and lng ->${latLng.lng}`}</span>
    </div>
  )
}

export default MarkerContent
