import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { LightSensor } from 'expo-sensors';

// Stildefinitionen für die verschiedenen Elemente
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 100,
  },
  textSmall: {
    fontSize: 20,
  }, 
  sensor: {
    marginTop: 45,
    paddingHorizontal: 10,
  },
});

export default function Light() {
  // Zustandshook für die Beleuchtungsdaten
  const [{ illuminance }, setData] = useState({ illuminance: 0 });

  useEffect(() => {
    // Beim Rendern der Komponente abonnieren des Sensors
    _toggle();

    // Cleanup-Funktion: Sensorabonnement beenden
    return () => {
      _unsubscribe();
    };
  }, []);

  // Funktion zum Ein- und Ausschalten des Sensorabonnements
  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  // Funktion zum Abonnieren des Sensors
  const _subscribe = () => {
    this._subscription = LightSensor.addListener(setData);
  };

  // Funktion zum Beenden des Sensorabonnements
  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  return (
    <View style={styles.container}>
      <Text>Light Sensor:</Text>
      <Text style={styles.text}>
        {Platform.OS === 'android' ? `${illuminance} lx` : `Only available on Android`}
      </Text>
    </View>
  );
}
