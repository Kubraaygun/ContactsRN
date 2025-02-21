import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CALLING, CONTACTDETAIL, TABBAVIGATOR} from '../utils/routes';
import Tabnavigator from './tabNavigator';
import ContactDetail from '../screens/contacts/contactDetail';
import {Colors} from '../theme/colors';
import Calling from '../screens/calling';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerBackTitle: 'Back', headerTintColor: Colors.BLACK}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABBAVIGATOR}
        component={Tabnavigator}
      />
      <Stack.Screen name={CONTACTDETAIL} component={ContactDetail} />
      <Stack.Screen name={CALLING} component={Calling} />
    </Stack.Navigator>
  );
}
