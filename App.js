import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Onboarding/Welcome";
import { PaperProvider } from "react-native-paper";
import Swiper from "./screens/Onboarding/SwiperScreen";
import RegisterMain from "./screens/Auth/Register/RegisterMain";
import Login from "./screens/Auth/Login";
import CompleteProfile from "./screens/Auth/Register/CompleteProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen
            name="RegisterMain"
            component={RegisterMain}
            options={{
              headerShown: false,
            }}
          />
          
          <Stack.Screen
            name="CompleteProfile"
            component={CompleteProfile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OnboardingScreens"
            component={Swiper}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
