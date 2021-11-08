import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import mapPin from '../../assets/img/map-pin.svg';
import {
  DEFAULT_MAP_LAT,
  DEFAULT_MAP_LNG,
  DEFAULT_MAP_ZOOM,
  MAP_WIDTH,
  API_KEY
} from '../../const';

function Map() {
  const mapContainerStyle = {
    width: MAP_WIDTH,
  };

  const defaultCenter = {
    lat: DEFAULT_MAP_LAT,
    lng: DEFAULT_MAP_LNG,
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} defaultCenter={defaultCenter} defaultZoom={DEFAULT_MAP_ZOOM}>
        <Marker position={defaultCenter} icon={mapPin}/>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
