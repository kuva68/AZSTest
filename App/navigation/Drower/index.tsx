import React, {useMemo} from 'react';

import {Icons} from '../../Utils/Icons';
import {scaledSize} from '../../Utils/Common';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
import {Text} from '../../Components/Text';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
const Item = ({
  name,
  title,
  navigateTo,
}: {
  name: 'User' | 'Ticket' | 'Bage' | 'Present' | 'ArrowRightWhite' | 'Location';
  title: string;
  navigateTo: (screen: string) => void;
}) => {
  const getIcon = useMemo(() => {
    switch (name) {
      case 'User':
        return <Icons.User height={scaledSize(50)} width={scaledSize(50)} />;
      case 'ArrowRightWhite':
        return (
          <Icons.ArrowRightWhite
            height={scaledSize(50)}
            width={scaledSize(50)}
          />
        );
      case 'Bage':
        return <Icons.BageDr height={scaledSize(50)} width={scaledSize(50)} />;
      case 'Present':
        return (
          <Icons.PersentDr height={scaledSize(50)} width={scaledSize(50)} />
        );
      case 'Ticket':
        return (
          <Icons.TicketDr height={scaledSize(50)} width={scaledSize(50)} />
        );
      case 'Location':
        return (
          <Icons.Location height={scaledSize(50)} width={scaledSize(50)} />
        );
    }
  }, [name]);
  return (
    <TouchableOpacity style={styles.item} onPress={() => navigateTo('Cabinet')}>
      {getIcon}

      <Text style={[styles.labelStyle, styles.marginL]}>{title}</Text>
    </TouchableOpacity>
  );
};

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const navigateTo = (name: string) => props.navigation.navigate(name);
  return (
    <SafeAreaView style={styles.container}>
      <Item
        name="User"
        title="Мій кабінет"
        navigateTo={() => navigateTo('LoginStack')}
      />
      <Item
        name="Bage"
        title="Ціни"
        navigateTo={() => navigateTo('LoginStack')}
      />
      <Item
        name="Ticket"
        title="Мої талони"
        navigateTo={() => navigateTo('LoginStack')}
      />
      <Item
        name="Present"
        title="Акції"
        navigateTo={() => navigateTo('LoginStack')}
      />
      <Item
        name="Location"
        title="Карта АЗК"
        navigateTo={() => navigateTo('LoginStack')}
      />
      <TouchableOpacity
        style={styles.back}
        onPress={() => props.navigation.toggleDrawer()}>
        <Text style={[styles.labelStyle]}>Вийти</Text>
        <Icons.ArrowRightWhite width={scaledSize(13)} height={scaledSize(10)} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default CustomDrawerContent;
