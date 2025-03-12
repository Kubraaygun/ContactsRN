import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNEWCONTACT,
  CALLING,
  CONTACTDETAIL,
  TABBAVIGATOR,
} from '../utils/routes';
import Tabnavigator from './tabNavigator';
import ContactDetail from '../screens/contacts/contactDetail';
import {Colors} from '../theme/colors';
import Calling from '../screens/calling';
import AddContact from '../screens/contacts/addContact';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={{marginRight: 15}}
                onPress={() => navigation.navigate(ADDNEWCONTACT)}>
                <Icon name="trash" size={25} color={Colors.RED} />
              </Pressable>
              <Pressable
                style={{marginRight: 15}}
                onPress={() => navigation.navigate(ADDNEWCONTACT)}>
                <Icon name="pencil" size={25} color={Colors.BLUE} />
              </Pressable>
            </View>
          ),
        })}
        name={CONTACTDETAIL}
        component={ContactDetail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={CALLING}
        component={Calling}
      />
      <Stack.Screen name={ADDNEWCONTACT} component={AddContact} />
    </Stack.Navigator>
  );
}
