import React, {FC, useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icons} from '../../Utils/Icons';
import styles from './styles';
import {scaledSize} from '../../Utils/Common';
import {Text} from '../Text';
interface headerProp {
  title?: string;
  logo?: boolean;
  leftPress?: () => void;
  leftIcon?: 'back' | 'bell';
  burger?: boolean;
  onBurgerPress?: () => void;
}
const HomeHeader: FC<headerProp> = ({
  title,
  logo,
  leftPress,
  leftIcon,
  burger,
  onBurgerPress,
}) => {
  const getLeftIcon = useMemo(() => {
    switch (leftIcon) {
      case 'bell':
        return <Icons.Bell height={scaledSize(22)} width={scaledSize(19)} />;
      case 'back':
        return <Icons.Back height={scaledSize(22)} width={scaledSize(19)} />;
      default:
        return null;
    }
  }, [leftIcon]);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={leftPress} style={styles.opacity}>
        {getLeftIcon}
      </TouchableOpacity>

      {logo ? (
        <Icons.Logo width={scaledSize(60)} height={scaledSize(70)} />
      ) : (
        <Text style={[styles.title]}>{title ? title : ''}</Text>
      )}
      {burger ? (
        <TouchableOpacity style={styles.width} onPress={onBurgerPress}>
          <Icons.Burger height={scaledSize(17)} width={scaledSize(19)} />
        </TouchableOpacity>
      ) : (
        <View style={styles.width} />
      )}
    </View>
  );
};

export default HomeHeader;
