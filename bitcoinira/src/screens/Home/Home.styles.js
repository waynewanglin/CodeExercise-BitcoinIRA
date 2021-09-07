import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.s,
  },
  listWrapper: {
    width: '100%',
    flex: 1,
    paddingTop: spacing.s,
  },
  cardWrapper: {
    flex: 1,
    marginTop: spacing.xs,
    marginBottom: spacing.xs,
    marginHorizontal: spacing.xs,
    padding: spacing.s,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: spacing.xs,
  },
});
