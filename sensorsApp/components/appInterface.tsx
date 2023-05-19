import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Pressable, Text, DeviceEventEmitter  } from 'react-native';
import GyroscopeScreen from "./gyroscope"
import Light from './light'

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 0
    },
    bottomButton: {
        flexDirection: 'column',
        padding: 10,
    },
    container: {
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
    },
    activated: {
        borderBottomColor: '#2196f3',
        borderBottomWidth: 2
    }

  });

const AppInterface = () => {
    const [currentDisplay, setCurrentDisplay] = useState('Gyroscope');
  
    const handlePress = (display: String) => () => {
      setCurrentDisplay(String(display))
    };




  return (
    <SafeAreaView style={styles.container}>
        <View>
        {currentDisplay == 'Gyroscope' ? (
            <GyroscopeScreen/>
        ) :(
            <Light/>
        )}
        </View>
        <View style={styles.bottomBar}>
            <Pressable style={styles.bottomButton} onPress={handlePress('Gyroscope')}>
                {currentDisplay == 'Gyroscope' ? (  
                    <Text style={[styles.buttonText, styles.activated]}>Gyroscope</Text>
                ) : (
                    <Text style={[styles.buttonText]}>Gyroscope</Text>
                )}
            </Pressable>
            <Pressable style={styles.bottomButton} onPress={handlePress('Light')}>
                {currentDisplay == 'Light' ? (  
                    <Text style={[styles.buttonText, styles.activated]}>Light</Text>
                ) : (
                    <Text style={[styles.buttonText]}>Light</Text>
                )}
            </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default AppInterface;
