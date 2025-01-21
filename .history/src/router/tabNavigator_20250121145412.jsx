import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CONTACTS, RESENTS} from '../utils/routes';
import Resents from '../screens/resents';
import Contacts from '../screens/contacts';

const Tab = createBottomTabNavigator();

export default function Tabnavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RESENTS} component={Resents} />
      <Tab.Screen name={CONTACTS} component={Contacts} />
    </Tab.Navigator>
  );
}
