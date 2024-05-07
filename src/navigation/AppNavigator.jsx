import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
        <Stack.Screen component={RegisterScreen} name="RegisterScreen" />
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
        <Stack.Screen component={SobreScreen} name="SobreScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}