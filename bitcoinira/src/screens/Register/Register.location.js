import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '@/screens/Register/Register.styles';
import { TextField } from '@/components';
import { strings } from '@/localization';
import { shadow } from '@/theme';

const LocationStep = (props) => {
  const [totalSteps, setTotalSteps] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const { getTotalSteps, getCurrentStep } = props;
  const { colors } = useTheme();

  if (totalSteps !== getTotalSteps()) {
    setTotalSteps(getTotalSteps());
  }

  if (currentStep !== getCurrentStep()) {
    setCurrentStep(getCurrentStep());
  }

  const nextStep = () => {
    const { next, saveState } = props;
    saveState({ city, country });
    next();
  };

  return (
    <View style={[styles.formContainer, shadow.primary, { backgroundColor: colors.primary }]}>
      <View style={styles.progressContainer}>
        <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
      </View>
      <TextField
        autoCapitalize="none"
        onChangeText={setCity}
        placeholder={strings.register.city}
        value={city}
      />
      <TextField
        autoCapitalize="none"
        onChangeText={setCountry}
        placeholder={strings.register.country}
        value={country}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.back} style={styles.btnStyle}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextStep} style={styles.btnStyle}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationStep;
