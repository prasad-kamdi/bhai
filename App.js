import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, SafeAreaView, Text } from 'react-native';
import Test from './Test';
//import AddsMobBanner from './AdMobBanner';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Test />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 25,
    alignItems: 'center'
  }
});
export default App;