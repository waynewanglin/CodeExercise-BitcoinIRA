import { useTheme } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import AnimatedMultistep from 'react-native-animated-multistep';
import ContactStep from './Register.contact';
import LocationStep from './Register.location';
import CompleteStep from './Register.complete';
import { register, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Register/Register.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';

const allSteps = [
  { name: 'Step 1', component: ContactStep },
  { name: 'step 2', component: LocationStep },
  { name: 'step 3', component: CompleteStep },
];

export function Register() {
  const dispatch = useDispatch();

  const finish = (finalState) => {
    dispatch(register(finalState));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.loginText}>Register</Text>
      </View>
      <View style={styles.lowerContainer}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={finish}
          animate={true}
          onBack={this.onBack}
          onNext={this.onNext}
          comeInOnNext="fadeInRight"
          OutOnNext="fadeOutLeft"
          comeInOnBack="fadeInLeft"
          OutOnBack="fadeOutRight"
        />
      </View>
    </ScrollView>
  );
}
