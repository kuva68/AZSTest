/* eslint-disable no-trailing-spaces */
import React, {FC, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  ImageBackground,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
const data = Array(5).fill(1);
import styles from './styles';
import {Images} from '../../Utils/Images';
import HomeHeader from '../../Components/HomeHeader';
import {Text} from '../../Components/Text';
import Card from '../../Components/Card';

interface HomeProps {
  navigation: {
    navigate: (name: string) => void;
    toggleDrawer: () => void;
  };
}

const HomeScreen: FC<HomeProps> = ({navigation}) => {
  const openDrower = useCallback(() => navigation.toggleDrawer(), [navigation]);

  const renderItem = () => {
    return (
      <Image
        source={Images.Voucher}
        resizeMode="contain"
        style={styles.image}
      />
    );
  };

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

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <HomeHeader leftIcon="bell" logo burger onBurgerPress={openDrower} />
          <FlatList
            pagingEnabled
            contentContainerStyle={styles.content}
            data={data}
            keyExtractor={(item, index) => '' + index}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />

          <Text style={[styles.text]}>Слідкуй за знижками</Text>
          <Card
            title="Отримати персональну знижку"
            leftIcon="percent"
            size="big"
            style={styles.persent}
          />
          <View style={styles.row}>
            <Card
              size="small"
              title={`Придбати
пальне`}
              leftIcon="ticket"
            />
            <Card
              size="small"
              title={`Ціни на
пальне`}
              leftIcon="azs"
            />
          </View>
          <Text style={[styles.text]}>Паливна картка</Text>
          <Card
            title="1205.80 грн"
            leftIcon="card"
            size="big"
            style={styles.persent}
            rightIcon
          />
          <Text style={[styles.text]}>Карта АЗК САН</Text>
          <Image source={Images.Map} style={styles.mapImg} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default HomeScreen;
