import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { styles } from '@/screens/Register/Register.styles';
import { shadow } from '@/theme';
import { strings } from '@/localization';
import { TextField } from '@/components';

const CompleteStep = (props) => {
  const [totalSteps, setTotalSteps] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const [dateOfBirth, setDob] = useState('2016-05-01');
  const [mobile, setMobile] = useState('');
  const { getTotalSteps, getCurrentStep } = props;
  const { colors } = useTheme();

  if (totalSteps !== getTotalSteps()) {
    setTotalSteps(getTotalSteps());
  }

  if (currentStep !== getCurrentStep()) {
    setCurrentStep(getCurrentStep());
  }

  const nextStep = async () => {
    const { next, saveState } = props;
    await saveState({ dateOfBirth, mobile });
    next();
  };

  return (
    <View style={[styles.formContainer, shadow.primary, { backgroundColor: colors.primary }]}>
      <View style={styles.progressContainer}>
        <Text style={styles.currentStepText}>{`Step ${currentStep} of ${totalSteps}`}</Text>
      </View>
      <View style={styles.dobWrapper}>
        <Text>Birthday</Text>
        <DatePicker
          style={styles.dobPicker}
          date={dateOfBirth}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2021-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDob(date);
          }}
        />
      </View>
      <TextField
        autoCapitalize="none"
        onChangeText={setMobile}
        placeholder={strings.register.mobile}
        keyboardType={'phone-pad'}
        value={mobile}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.back} style={styles.btnStyle}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextStep} style={styles.btnStyle}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompleteStep;
