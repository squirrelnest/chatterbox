import React, {Component} from 'react';
import { Popup } from 'react-map-gl';

export default class MapPopup extends Component {

  render() {

    return (

      <div>
        <Popup
          latitude={this.props.lat}
          longitude={this.props.lon}
          closeButton={true}
          anchor="bottom"
        >
          <p>Longitude: {this.props.lon}</p>
          <p>Latitude: {this.props.lat}</p>
        </Popup>
      </div>

    );
  }
}
