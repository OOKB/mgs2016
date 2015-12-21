import React, { Component, PropTypes } from 'react'

import random from 'lodash/array/random'

import Nav from './Nav'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgNum: props.data.imgNum
    }
  }
  componentDidMount() {
    const { headerImgQty } = this.props.data
    this.setState({
      imgNum: random(1, headerImgQty)
    })
  }
  render() {
    const { imgNum } = this.state
    const { data, programs} = this.props
    {title} = data
    className = "header-art-#{imgNum}"

    return (
      <header className={className}>
        <h1 style={display: 'none'}>{title}</h1>
        <Nav data={data} programs={programs} />
      </header>
    )
  }
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
  programs: PropTypes.array.isRequired,
}
