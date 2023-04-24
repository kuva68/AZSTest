/* eslint-disable no-trailing-spaces */
import React, {useCallback, useState} from 'react';
import {SafeAreaView, ImageBackground, StatusBar} from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import styles from './styles';
import {Images} from '../../Utils/Images';
import InfoModal from '../../Components/InfoModal';
import {NavigationProp} from '@react-navigation/native';
import {RootParams} from '../../navigation/AppNavigation';

export interface CabinetProps {
  navigation: NavigationProp<RootParams, 'Cabinet'>;
}
export const CabinetScreen = ({navigation}: CabinetProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const goToRegistration = () => {
    setIsModalVisible(false);
    setTimeout(() => navigation.navigate('Login'), 500);
  };
  const openDrower = useCallback(() => navigation.toggleDrawer(), [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground
        source={Images.Background}
        resizeMode="stretch"
        style={styles.imgBackgound}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />

        <HomeHeader
          leftIcon="bell"
          burger
          onBurgerPress={openDrower}
          title="Мій кабінет"
        />
      </ImageBackground>
      <InfoModal
        action={goToRegistration}
        modal={isModalVisible}
        title={`Зареєструйстесь для створення
власного кабінету`}
      />
    </SafeAreaView>
  );
};
