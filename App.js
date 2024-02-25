import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Onboarding/Welcome";
import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Onboarding2 from "./screens/Onboarding/Onboarding2";
import Onboarding3 from "./screens/Onboarding/Onboarding3";
import Onboarding4 from "./screens/Onboarding/Onboarding4";
import Swiper from "./screens/Onboarding/SwiperScreen";
import RegisterMain from "./screens/Auth/Register/RegisterMain";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}
