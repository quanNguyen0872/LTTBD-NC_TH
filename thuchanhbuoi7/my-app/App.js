import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewScreen from './NewScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NewScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
