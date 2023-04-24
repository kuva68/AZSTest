import React, {FC} from 'react';
import {View} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import styles from './styles';

import {Text} from '../Text';

import {Colors} from '../../Constants/Colors';

interface CheckBoxFieldProps {
  value: boolean;
  toggle: (val: boolean) => void;
  text: string;
  error: boolean;
}

export const CheckBoxField: FC<CheckBoxFieldProps> = ({
  value,
  toggle,
  text,
  error,
}) => {
  return (
    <View style={styles.checkBoxView}>
      <View style={[styles.textView]}>
        <Text style={[styles.underline, error && styles.error]}>{text}</Text>
      </View>

      <CheckBox
        lineWidth={2}
        hideBox={false}
        boxType={'square'}
        onCheckColor={Colors.white}
        onFillColor={Colors.drawerColor}
        onTintColor={'#F4DCF8'}
        animationDuration={0.5}
        disabled={false}
        value={value}
        onValueChange={newValue => toggle(newValue)}
      />
    </View>
  );
};
