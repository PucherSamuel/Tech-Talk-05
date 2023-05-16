import { StyleSheet, Text, View } from 'react-native';
import AppInterface from './components/appInterface';

export default function App() {
  return (
    <View style={styles.container}>
      <AppInterface/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
