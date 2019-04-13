import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import "./songTemplate.css"

const SongTemplate = ({ pageContext: { data } }) => (
  <div className="wrapper-song">
    <Link to="/" className="back">
      BB
    </Link>
    <img src={data.foto} alt="" />
    {/* <h2>{data.artist.id}</h2> */}
    <h1 className="title">{data.title}</h1>
    <ReactMarkdown source={data.tabs} />
    <ReactMarkdown source={data.text} className="text" />
    <ReactMarkdown source={data.chords} className="chords" />
  </div>
)

export default SongTemplate
