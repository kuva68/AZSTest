import React, {FC} from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import {Text} from '../Text';
interface cardProp {
  title?: string;
  onPress?: () => void;
  size: 'small' | 'big';
  style?: ViewStyle;
  textStyle?: TextStyle;
}
const StandardButton: FC<cardProp> = ({
  title,
  onPress,
  size,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        size === 'small' && styles.small,
        style && style,
      ]}>
      <Text style={[styles.title, textStyle && textStyle]}>
        {title ? title : ''}
      </Text>
    </TouchableOpacity>
  );
};

export default StandardButton;
