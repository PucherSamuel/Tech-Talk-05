import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 90,
  },
  textSmall: {
    fontSize: 20,
  }
});

const GyroscopeScreen = () => {
  // Zustandshook für die Gyroskopdaten
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  // Festlegen des Update-Intervalls für das Gyroskop (alle 500 Millisekunden)
  Gyroscope.setUpdateInterval(500);

  // Funktion zum Abonnieren des Gyroskopsensors
  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener(gyroscopeData => {
        setData(gyroscopeData);
      })
    );
  };

  // Funktion zum Beenden des Sensorabonnements
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    // Beim Rendern der Komponente das Sensorabonnement starten
    _subscribe();

    // Cleanup-Funktion: Sensorabonnement beenden
    return () => _unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>x: {x.toFixed(3)}</Text>
      <Text style={styles.text}>y: {y.toFixed(3)}</Text>
      <Text style={styles.text}>z: {z.toFixed(3)}</Text>
    </View>
  );
};

export default GyroscopeScreen;
