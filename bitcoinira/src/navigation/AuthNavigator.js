import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Register } from '@/screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Register}
        name={NAVIGATION.register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
