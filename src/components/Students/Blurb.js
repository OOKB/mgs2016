import React, { PropTypes } from 'react'

function Blurb({ label, value, blurb, infoLinkMsg, infoLinkSrc }) {
  return (
    <div className={`program-info clearfix mb2 ${value}`}>
      <div className="six columns">
        <h3>{ label }</h3>
        { blurb && <p>{ blurb }</p> }
        { infoLinkMsg && infoLinkSrc && <p><a href={ infoLinkSrc }>{ infoLinkMsg }</a></p> }
      </div>
    </div>
  )
}

Blurb.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  blurb: PropTypes.string,
  infoLinkMsg: PropTypes.string.isRequired,
  infoLinkSrc: PropTypes.string.isRequired,
}
Blurb.defaultProps = {
  infoLinkMsg: 'To request information about this or any other of MICA’s graduate programs, visit MICA Graduate Admission',
  infoLinkSrc: 'http://www.mica.edu/Admission_and_Financial_Aid/Graduate_Admission_and_Financial_Aid.html?utm_source=mica%20grad%20show',
}

export default Blurb
