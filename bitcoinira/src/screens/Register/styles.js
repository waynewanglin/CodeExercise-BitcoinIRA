import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
