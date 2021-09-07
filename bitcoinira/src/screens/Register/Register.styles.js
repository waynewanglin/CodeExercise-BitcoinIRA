import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  formContainer: {
    borderRadius: 5,
    padding: spacing.s,
    marginTop: spacing.s,
  },
  submitButton: {
    marginTop: spacing.m,
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 32,
    color: '#000',
  },
  lowerContainer: {
    flex: 4,
    width: '100%',
  },
  progressContainer: {
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: spacing.s,
  },
  step1: {
    flex: 1,
  },
  step2: {
    flex: 1,
  },
  step3: {
    flex: 1,
  },
  step4: {
    flex: 1,
  },
  input: {
    width: '80%',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  btnStyle: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImage: {
    width: '40%',
    height: '40%',
  },
  backBtn: {
    transform: [{ rotate: '180deg' }],
  },
  marginAround: {
    width: '40%',
    justifyContent: 'space-between',
  },
  currentStepText: {
    color: '#fff',
    fontSize: 22,
  },
  dobWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.m,
    paddingLeft: spacing.xs,
  },
  dobPicker: {
    marginLeft: spacing.xs,
  },
});
