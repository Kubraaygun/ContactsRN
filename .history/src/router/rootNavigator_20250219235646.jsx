import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONTACTDETAIL, TABBAVIGATOR} from '../utils/routes';
import Tabnavigator from './tabNavigator';
import ContactDetail from '../screens/contacts/contactDetail';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: 'Back'}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABBAVIGATOR}
        component={Tabnavigator}
      />
      <Stack.Screen name={CONTACTDETAIL} component={ContactDetail} />
    </Stack.Navigator>
  );
}
