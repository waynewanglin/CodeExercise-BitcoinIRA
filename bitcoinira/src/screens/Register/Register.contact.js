import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { styles } from '@/screens/Register/Register.styles';
import { ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { shadow } from '@/theme';
import { validateEmail } from '@/utils/validation';

const ContactStep = (props) => {
  const { getTotalSteps, getCurrentStep, getState } = props;
  const [totalSteps, setTotalSteps] = useState('');
  const [error, setError] = useState(null);
  const [currentStep, setCurrentStep] = useState('');
  const [firstName, setFirstName] = useState(getState().firstName || '');
  const [lastName, setLastName] = useState(getState().lastName || '');
  const [email, setEmail] = useState(getState().email || '');
  const { colors } = useTheme();

  if (totalSteps !== getTotalSteps()) {
    setTotalSteps(getTotalSteps());
  }

  if (currentStep !== getCurrentStep()) {
    setCurrentStep(getCurrentStep());
  }

  const blurEmail = () => {
    if (validateEmail(email)) {
      setError([validateEmail(email)]);
    } else {
      setError(null);
    }
  };

  const changeEmail = (email) => {
    setError(null);
    setEmail(email);
  };

  const nextStep = () => {
    if (email === '') {
      setError([strings.validation.requiredEmail]);
    } else if (!error) {
      const { next, saveState } = props;
      saveState({ firstName, lastName, email });
      next();
    }
  };

  return (
    <View style={[styles.formContainer, shadow.primary, { backgroundColor: colors.primary }]}>
      <View style={styles.progressContainer}>
        <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
      </View>
      <TextField
        autoCapitalize="none"
        onChangeText={setFirstName}
        placeholder={strings.login.firstName}
        value={firstName}
      />
      <TextField
        autoCapitalize="none"
        onChangeText={setLastName}
        placeholder={strings.login.lastName}
        value={lastName}
      />
      <TextField
        autoCapitalize="none"
        onChangeText={changeEmail}
        placeholder={strings.login.email}
        value={email}
        onBlur={blurEmail}
      />
      {error && <ErrorView errors={error} />}
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={nextStep} style={styles.btnStyle}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactStep;
