import React, { Component } from "react"
import "./buttonDown.css"

class buttonDown extends Component {
  state = {
    speed: 3,
  }

  handleStartScroll() {
    const speed = 3
    this.setState({
      speed,
    })
    setInterval(() => {
      window.scrollBy(0, this.state.speed)
    }, 50)
  }

  handleStopScroll() {
    this.setState({
      speed: 0,
    })
  }

  handleSlower(speed) {
    if (speed === 0) return
    speed--
    this.setState({
      speed,
    })
  }

  handleFaster(speed) {
    speed++
    this.setState({
      speed,
    })
  }

  render() {
    const { speed } = this.state
    console.log(speed)
    return (
      <div className="button-down">
        <button className="slower" onClick={() => this.handleSlower(speed)}>
          -
        </button>
        <button
          className="startScroll"
          onClick={() => this.handleStartScroll()}
        >
          auto scroll
        </button>
        <button className="stopScroll" onClick={() => this.handleStopScroll()}>
          ||
        </button>
        <button className="faster" onClick={() => this.handleFaster(speed)}>
          +
        </button>
      </div>
    )
  }
}

export default buttonDown
