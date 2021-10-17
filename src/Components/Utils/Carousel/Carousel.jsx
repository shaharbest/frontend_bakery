import React, { Component } from 'react'
import './Carousel.css'

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    const { show, children } = props

    this.state = {
      currentIndex: 0,
      show: show || 0,
      length: children.length,
      touchPosition: null,
    }
  }

  next = () => {
    const { currentIndex, length, show } = this.state
    if (currentIndex < length - show)
      this.setState({ currentIndex: currentIndex + 1 })
  }

  prev = () => {
    const { currentIndex } = this.state

    if (currentIndex > 0) this.setState({ currentIndex: currentIndex - 1 })
  }

  handleTouchStart = (e) => {
    this.setState({ touchPosition: e.touches[0].clientX })
  }

  handleTouchMove = (e) => {
    const touchDown = this.state.touchPosition

    if (touchDown === null) return

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) this.next()
    if (diff < -5) this.prev()

    this.setState({ touchPosition: null })
  }

  render() {
    const { length, show, currentIndex } = this.state

    return (
      <div className="flex flex-col w-full">
        <div className="relative flex w-full">
          {currentIndex !== 0 && (
            <button onClick={this.prev} className="arrow left-24">
              &lt;
            </button>
          )}

          <div
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            className="overflow-hidden h-full w-full"
          >
            <div
              className={`carousel-content flex show-${show}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {this.props.children}
            </div>
          </div>

          {currentIndex < length - show && (
            <button onClick={this.next} className="arrow right-24">
              &gt;
            </button>
          )}
        </div>
      </div>
    )
  }
}
