import React, { Component } from 'react';
import Mappy from '../components/Mappy.js';
import Fab from '../components/Fab.js';

export default class MapContainer extends Component {

  render() {
    return (
      <div className="map-container">

        <Mappy
          width={this.props.width}
          height={this.props.height}
          locations={this.props.locations}
          lon={this.props.lon}
          lat={this.props.lat}
          handleMapClick={this.props.handleMapClick}
        />

      <Fab handleToggle={this.props.handleToggle} />

      </div>
    );
  }
}
