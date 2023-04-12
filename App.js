import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LibraryScreen from './screens/LibraryScreen';
import Navigator from './navigation/Navigator';
import AudioPlayer from './pages/AudioPlayer';

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //marginVertical: 50,
  },
});
