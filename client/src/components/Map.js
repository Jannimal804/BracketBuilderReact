import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.746686,
      lng: -73.996170
    },
    zoom: 12
  };
 
  render() {
    return (
      <div style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;