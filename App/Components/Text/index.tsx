import React, {FC} from 'react';
import {Text as RnText, TextProps} from 'react-native';
import styles from './styles';

export const Text: FC<TextProps> = props => {
  return (
    <RnText
      allowFontScaling={false}
      style={[styles.text, props.style]}
      {...props}>
      {props.children}
    </RnText>
  );
};
