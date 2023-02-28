import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';

import store from  "./Store"

import MainNavigator from "./navigation/PublicationNavigator"


function App(): JSX.Element {
  return (
    <Provider store={store}>


  <SafeAreaView style={styles.root}>
        <MainNavigator/>
      </SafeAreaView>
    </Provider>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
