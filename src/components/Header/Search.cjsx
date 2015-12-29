import React, { Component, PropTypes } from 'react'

class Search extends Component {

}

{Navigation} = require 'react-router'

module.exports = React.createClass
  mixins: [Navigation]
  contextTypes: {
    router: React.PropTypes.func.isRequired
  }
  handleChange: (e) ->
    {activeSection} = @props
    unless activeSection is 'students'
      document.querySelector('#students').scrollIntoView(true)

    searchTxt = @refs.searchTxt.getDOMNode().value
    q = @context.router.getCurrentQuery()
    q.search = searchTxt.toLowerCase()

    @replaceWith '/', {}, q

  render: ->
    q = @context.router.getCurrentQuery() or {}
    <div role="form" id="search" className="form-group">
      <input type="text" ref="searchTxt" value={q.search} onChange={@handleChange}
        onKeyDown={@keyDown} className="form-control" name="item-search"
        placeholder="Search by name" />
    </div>
