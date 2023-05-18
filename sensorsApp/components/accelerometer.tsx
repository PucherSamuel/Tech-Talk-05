import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Button, Text, View, TextInput } from 'react-native';
import {
    accelerometer,
    gyroscope,
    setUpdateIntervalForType,
    SensorTypes
  } from "react-native-sensors";
import { map, filter } from "rxjs/operators";
    
  const styles = StyleSheet.create({
      container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex:1
      }
    });
    
      
    
const Accelerometer = () => {  
  
      
  setUpdateIntervalForType(SensorTypes.accelerometer, 400); // Standardmäßig 100 ms
      
  const observer = {
    next: speed => {
      const speedValue = speed; // Aktualisiere den Wert der Geschwindigkeit
      console.log(`Du hast dein Telefon mit einer Geschwindigkeit von ${speedValue} bewegt`);
    },
    error: error => console.log("Der Sensor ist nicht verfügbar")
  };
      
  const subscription = accelerometer
    .pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 20))
    .subscribe(observer);  
  
  return (
    <View style={styles.container}>
      <Text>{String(observer)}</Text>
    </View>
  );
};
    
  export default Accelerometer;
    
    