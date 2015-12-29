React = require 'react'

mapStyles = require './mapStyles'

module.exports = React.createClass
  displayName: "Gmap"

  # initialize local variables
  getInitialState: ->
    map: null
    markers: []

  # set some default values
  getDefaultProps: ->
    latitude: 0
    longitude: 0
    zoom: 4
    width: 320
    height: 480
    points: []
    gmaps_api_key: ""
    gmaps_sensor: false

  # update geo-encoded markers
  updateMarkers: (points) ->
    markers = @state.markers
    map = @state.map
    pin = "/pin.svg"

    # map may not be loaded when parent component re-renders
    return false if map is null

    # remove everything
    markers.forEach (marker) ->
      marker.setMap null
      return

    @state.markers = []

    # add new markers
    points.forEach ((point) ->
      location = new google.maps.LatLng(point.latitude, point.longitude)
      marker = new google.maps.Marker(
        position: location
        map: map
        title: point.label
        icon: pin
      )
      markers.push marker
      info = new google.maps.InfoWindow content: point.info
      google.maps.event.addListener marker, 'click', ->
        info.open(map, marker)
      return
    )
    @setState markers: markers
    return

  componentDidMount: ->
    {settings} = @props
    window.mapLoaded = =>
      {zoom, latitude, longitude, points} = settings
      mapOptions =
        zoom: zoom
        center: new google.maps.LatLng(latitude, longitude)
        mapTypeId: google.maps.MapTypeId.ROADMAP
        scrollwheel: false
        zoomControl: true
        styles: mapStyles

      map = new google.maps.Map(@getDOMNode(), mapOptions)
      @setState map: map
      @updateMarkers points
      return

    s = document.createElement("script")
    s.src = "https://maps.googleapis.com/maps/api/js?sensor=true&callback=mapLoaded"
    document.head.appendChild s
    return


  # update markers if needed
  componentWillReceiveProps: (props) ->
    #@updateMarkers props.points  if props.points
    return

  render: ->
    <div className="google-map-container" />
