import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/screens/Home";
import Onboard from "../views/screens/Onboard";
import Details from "../views/screens/Details";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboard" component={Onboard} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
