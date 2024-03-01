import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Report from './src/screens/Report';
import HousecupsAndSandhi from './src/screens/HousecupsAndSandhi';
import Dosha from './src/screens/Dosha';
import Gemstones from './src/screens/Gemstones';
import {PaperProvider} from 'react-native-paper';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Report" component={Report} />
          <Tab.Screen name="HouseCups" component={HousecupsAndSandhi} />
          <Tab.Screen name="Dosa" component={Dosha} />
          <Tab.Screen name="Gemstones" component={Gemstones} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
