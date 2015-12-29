import React, { Component, PropTypes } from 'react'

class Intro extends Component {
  render() {
    const { body } = this.props
    return (
      <article id="intro">
        <div className="container">
          <div className="intro-text">
            { body.map((pText, index) => <p key={index}>{ pText }</p>) }
          </div>
          <div className="creative-blank-video">
          </div>
        </div>
      </article>
    )
  }
}

Intro.propTypes = {
  body: PropTypes.array.isRequired,
}
Intro.defaultProps = {
  body: [
    'We invite you to join the next generation of creative thinkers—artists, designers, educators, curators and critics—as they demonstrate the power and possibilities of contemporary art and design.',
    'MICA Grad Show 2016 includes exhibitions and critiques, gallery talks and presentations, public programs, a symposium, and student-curated installations throughout Baltimore city.',
    'Join us for a season of innovative and inspiring events and exhibitions featuring the culminating work of more than 150 of MICA\'s graduate students from the College\'s internationally renowned programs.',
  ],
}
export default Intro
