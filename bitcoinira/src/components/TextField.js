import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { spacing } from '@/theme';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: spacing.xs,
    paddingTop: spacing.m,
    marginBottom: spacing.s,
  },
  input: {
    paddingHorizontal: spacing.xs,
  },
  label: {
    color: 'gray',
    position: 'absolute',
    top: 0,
    left: spacing.xs,
  },
});

export function TextField({ onBlur, onFocus, placeholder, value, ...rest }) {
  const animation = useSharedValue(0);

  const handleFocus = () => {
    if (!value) {
      animation.value = withTiming(1);
    }

    onFocus?.();
  };

  const handleBlur = () => {
    if (!value) {
      animation.value = withTiming(0);
    }

    onBlur?.();
  };

  return (
    <View style={styles.container}>
      <TextInput
        onBlur={handleBlur}
        onFocus={handleFocus}
        style={styles.input}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
}

TextField.propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};
