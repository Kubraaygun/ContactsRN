import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TABBAVIGATOR} from '../utils/routes';
import Tabnavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={TABBAVIGATOR} component={Tabnavigator} />
      <Stack.Screen name={TABBAVIGATOR} component={Tabnavigator} />
    </Stack.Navigator>
  );
}
