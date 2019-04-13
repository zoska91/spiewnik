import React from "react"
import { Link } from "gatsby"

const SongTemplate = ({ pageContext: { data } }) => (
  <div>
    <Link to="/">Go back</Link>
    <img src={data.foto} alt="" />
    <h2>{data.artist.id}</h2>
    <h1>{data.title}</h1>
    <p>{data.tabs}</p>
    <p>{data.text}</p>
    <p>{data.chords}</p>
  </div>
)

export default SongTemplate
