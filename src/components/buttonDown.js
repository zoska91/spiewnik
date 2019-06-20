import React, { Component } from "react"
import "./buttonDown.css"
import $ from "jquery"

class buttonDown extends Component {
  state = {
    speed: 30000,
  }

  handleStartScroll(speed) {
    // const speed = this.state.speed
    console.log(speed)
    $("body, html").animate(
      {
        scrollTop: $(window).height(),
      },
      speed,
      "linear"
    )
  }

  handleSlower() {
    this.setState((prevState, props) => ({
      speed: prevState.speed + 500,
    }))
  }

  render() {
    const { speed } = this.state
    console.log(speed)
    return (
      <div className="button-down">
        <button className="slower" onClick={this.handleSlower}>
          -
        </button>
        <button className="down" onClick={() => this.handleStartScroll(speed)}>
          auto scroll
        </button>
        <button className="faster">+</button>
      </div>
    )
  }
}

export default buttonDown
