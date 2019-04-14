import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import "./songTemplate.css"
import Back from "../images/back.png"

const SongTemplate = ({ pageContext: { data } }) => (
  <div className="wrapper-song">
    <Link to="/" className="back">
      <img src={Back} alt="wstecz" />
    </Link>
    <h2 className="artist">{data.artist}</h2>
    <h1 className="title">{data.title}</h1>
    <ReactMarkdown source={data.tabs} className="tabs" />
    <ReactMarkdown source={data.text} className="text" />
    <ReactMarkdown source={data.chords} className="chords" />
    {console.log(data.artists.name)}
  </div>
)

export default SongTemplate
