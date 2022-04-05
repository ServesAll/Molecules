import React, { useEffect, useState } from "react";
import { MapWrapper, MarkerWrapper } from "./Map.style";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import MapMarker from "./Marker";

const DEFAULT_LOCATION = {
  longitude: -122.406417,
  latitude: 37.785834,
  latitudeDelta: 0.005,
  longitudeDelta: 0.01,
};

export default function Map({
  longitude,
  latitude,
  theme,
  onChange = () => {},
}) {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (longitude && latitude) {
      setLocation(
        Object.assign(
          {
            longitude,
            latitude,
          },
          { latitudeDelta: 0.005, longitudeDelta: 0.01 }
        )
      );
    }
  }, [longitude, latitude]);

  useEffect(() => {
    if (!longitude) {
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation(
            Object.assign(position.coords, {
              latitudeDelta: 0.005,
              longitudeDelta: 0.01,
            })
          );
        },
        (error) => {
          // See error code charts below.
          //console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }, []);

  useEffect(() => {
    onChange(location);
  }, [location]);

  return (
    <MapWrapper theme={theme}>
      <MapView
        loadingEnabled={true}
        region={location}
        style={{ width: "100%", height: "100%" }}
        onRegionChangeComplete={(region) => {
          if (isMoving) {
            setLocation(region);
            setIsMoving(false);
          }
        }}
        onPanDrag={(e) => {
          setIsMoving(true);
        }}
      />
      <MarkerWrapper theme={theme} pointerEvents="none">
        <MapMarker isMoving={isMoving} />
      </MarkerWrapper>
    </MapWrapper>
  );
}
