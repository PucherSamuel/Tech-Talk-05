import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Pressable, Text, DeviceEventEmitter  } from 'react-native';

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
    const [currentDisplay, setCurrentDisplay] = useState('Geschwindigkeit');
  
    const handlePress = (display: String) => () => {
      setCurrentDisplay(String(display))
    };




  return (
    <SafeAreaView style={styles.container}>
        <View>
        {currentDisplay == 'Geschwindigkeit' ? (
            <Text>Geschwindigkeit </Text>
        ) : (
            <Text>Applausometer </Text>
        )}
        </View>
        <View style={styles.bottomBar}>
            <Pressable style={styles.bottomButton} onPress={handlePress('Geschwindigkeit')}>
                {currentDisplay == 'Geschwindigkeit' ? (  
                    <Text style={[styles.buttonText, styles.activated]}>Geschwindigkeit</Text>
                ) : (
                    <Text style={[styles.buttonText]}>Geschwindigkeit</Text>
                )}
            </Pressable>
            <Pressable style={styles.bottomButton} onPress={handlePress('Applausometer')}>
                {currentDisplay == 'Applausometer' ? (  
                    <Text style={[styles.buttonText, styles.activated]}>Applausometer</Text>
                ) : (
                    <Text style={[styles.buttonText]}>Applausometer</Text>
                )}
            </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default AppInterface;
