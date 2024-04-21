import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

import AppTabNavigator from "./AppTabNavigator";


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">

                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}}/>
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown : false}} />
                <Stack.Screen name="Root" component={AppTabNavigator} options={{
                headerShown:false
            }}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default AppNavigator;