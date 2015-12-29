import React, { PropTypes } from 'react'

function Blurb({ name, blurb, infoLinkMsg, infoLinkSrc }) {
  return (
    <div className="program-info">
      <h3>{ name }</h3>
      <p>{ blurb }</p>
      <p><a href={ infoLinkSrc }>{ infoLinkMsg }</a></p>
    </div>
  )
}

Blurb.propTypes = {
  name: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  infoLinkMsg: PropTypes.string.isRequired,
  infoLinkSrc: PropTypes.string.isRequired,
}
Blurb.defaultProps = {
  infoLinkMsg: 'To request information about this or any other of MICA’s graduate programs, visit MICA Graduate Admission',
  infoLinkSrc: 'http://www.mica.edu/Admission_and_Financial_Aid/Graduate_Admission_and_Financial_Aid.html?utm_source=mica%20grad%20show',
}

export default Blurb
