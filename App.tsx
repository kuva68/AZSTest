import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {createRootNavigator} from './App/navigation/AppNavigation';
const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  const Layout = createRootNavigator();
  return <Layout />;
};

export default App;
