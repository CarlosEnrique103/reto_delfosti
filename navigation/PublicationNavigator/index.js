import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '../../Screens/ListScreen';
import NewPublicationScreen from '../../Screens/NewPublicationScreen';
import PublicatedScreen from '../../Screens/PublicatedScreen';

const Tab = createBottomTabNavigator();

const PublicationTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Publicated" component={PublicatedScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="NewPublication" component={NewPublicationScreen} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <PublicationTabs />
    </NavigationContainer>
  );
};

export default MainNavigator;
