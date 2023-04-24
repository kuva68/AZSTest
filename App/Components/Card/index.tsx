import React, {FC, useMemo} from 'react';
import {TouchableOpacity, ViewStyle, View} from 'react-native';
import {Icons} from '../../Utils/Icons';
import styles from './styles';
import {scaledSize} from '../../Utils/Common';
import {Text} from '../Text';
interface cardProp {
  title?: string;
  onPress?: () => void;
  leftIcon?: 'percent' | 'ticket' | 'azs' | 'card';
  rightIcon?: boolean;
  size: 'small' | 'big';
  style?: ViewStyle;
}
const Card: FC<cardProp> = ({
  title,
  onPress,
  leftIcon,
  rightIcon,
  size,
  style,
}) => {
  const getLeftIcon = useMemo(() => {
    switch (leftIcon) {
      case 'azs':
        return <Icons.Azs height={scaledSize(33)} width={scaledSize(33)} />;
      case 'percent':
        return <Icons.Present height={scaledSize(33)} width={scaledSize(33)} />;
      case 'ticket':
        return <Icons.Ticket height={scaledSize(33)} width={scaledSize(33)} />;
      case 'card':
        return <Icons.Card height={scaledSize(33)} width={scaledSize(33)} />;
      default:
        return null;
    }
  }, [leftIcon]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        size === 'small' && styles.small,
        style && style,
      ]}>
      {getLeftIcon}
      <View style={[styles.rightContainer, size === 'small' && styles.sm]}>
        <Text
          style={[styles.title, size === 'small' && styles.smallText]}
          numberOfLines={size === 'big' ? 1 : 2}>
          {title ? title : ''}
        </Text>

        {rightIcon && (
          <Icons.Barcode height={scaledSize(31)} width={scaledSize(141)} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
