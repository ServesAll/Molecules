import React, { useEffect, useState } from "react";
import { Platform, PermissionsAndroid } from "react-native";
import { MapWrapper, MarkerWrapper } from "./Map.style";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
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
  liteMode = false,
  editable = true,
}) {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [isMoving, setIsMoving] = useState(false);
  const [isPermitionGranted, setIsPermitionGranted] = useState(false);

  async function requestPermissions() {
    if (Platform.OS === "ios") {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setIsPermitionGranted(true);
      }
    }

    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsPermitionGranted(true);
      }
    }
  }

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
      Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 15000,
      })
        .then((location) => {
          setLocation(
            Object.assign(location.coords, {
              latitudeDelta: 0.005,
              longitudeDelta: 0.01,
            })
          );
        })
        .catch((error) => {
          // Handle permission errors
          if (error.code === "ERR_LOCATION_UNAUTHORIZED") {
            requestPermissions();
          }
          //console.log(error.code, error.message);
        });
    }
  }, [isPermitionGranted]);

  useEffect(() => {
    onChange(location);
  }, [location]);

  return (
    <MapWrapper theme={theme}>
      <MapView
        provider={PROVIDER_GOOGLE}
        liteMode={liteMode}
        loadingEnabled={true}
        region={location}
        style={{ width: "100%", height: "100%" }}
        onRegionChangeComplete={(region) => {
          if (isMoving && editable) {
            setLocation(region);
            setIsMoving(false);
          }
        }}
        onPanDrag={(e) => {
          editable && setIsMoving(true);
        }}
      />
      <MarkerWrapper theme={theme} pointerEvents="none">
        <MapMarker isMoving={isMoving} />
      </MarkerWrapper>
    </MapWrapper>
  );
}
