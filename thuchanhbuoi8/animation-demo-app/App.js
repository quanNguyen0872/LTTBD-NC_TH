import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import bai_1 from './components/bai_1'

export default function App() {
  return (
    <bai_1/>
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
