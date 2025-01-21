import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TABBAVIGATOR} from '../utils/routes';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TABBAVIGATOR} component={HomeScreen} />
    </Stack.Navigator>
  );
}
