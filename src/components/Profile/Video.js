import React, { PropTypes } from 'react'

function getSrc(provider, videoId) {
  let src = ''
  switch (provider) {
    case 'Vimeo':
      src = 'https://player.vimeo.com/video'
      break
    case 'Youtube':
      src = 'https://www.youtube.com/embed'
      break
    default:
      break
  }
  return src + videoId
}

function Video({ provider, videoId, ...rest }) {
  const src = getSrc(provider, videoId)
  return (
    <iframe
      {...rest}
      src={src}
    />
  )
}

Video.propTypes = {
  provider: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
}
Video.defaultProps = {
  frameBorder: '0',
  height: '400',
  allowFullScreen: true,
  mozAllowFullScreen: true,
  webkitAllowFullScreen: true,
  width: '600',
}

export default Video
