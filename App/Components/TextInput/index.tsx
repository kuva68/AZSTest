import React, {ReactNode} from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import presets, {TextInputPreset} from './text-input.presets';

export interface TextInputProps extends RNTextInputProps {
  preset?: TextInputPreset;
  textStyle?: TextStyle;
  right?: ReactNode;
  prefixComponent?: Element;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const {style, textStyle, preset, right, ...rest} = props;
  const styles = presets[preset || 'accent'];

  return (
    <View style={[styles.inputContainer, style]}>
      <RNTextInput {...rest} style={[styles.textInput, textStyle]} />
      {right && right}
    </View>
  );
};

TextInput.defaultProps = {
  placeholderTextColor: '#AAAAAA',
};
