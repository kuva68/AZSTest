import React, {FC, useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Vibration,
  StatusBar,
  ImageBackground,
  Pressable,
  Keyboard,
  Alert,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import HomeHeader from '../../Components/HomeHeader';
import userData from '../../Servises/Network';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {Images} from '../../Utils/Images';
import {scaledSize} from '../../Utils/Common';
import {Text} from '../../Components';
import {Icons} from '../../Utils/Icons';
import StandardButton from '../../Components/StandardButton';
import dayjs from 'dayjs';
import {setUser} from '../../Servises/firebase';
import CheckBoxField from '../../Components/CheckField';
import {Spiner} from '../../Components/Spiner/Spiner';

interface BithDateScreenProps {
  navigation: {
    navigate: (name: string) => void;
  };
}

export const BirthDateScreen: FC<BithDateScreenProps> = ({navigation}) => {
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  const [checkBoxError, setCheckBoxError] = useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const formatDate = (date: Date) => {
    const result = dayjs(date).format('DD.MM.YYYY');
    return result;
  };

  const changeDate = (e: DateTimePickerEvent, date?: Date) => {
    if (e.type === 'dismissed') {
      setDatePickerVisible(false);
    } else {
      if (date) {
        setValue(formatDate(date));
      }

      setDatePickerVisible(false);
    }
  };

  const goNext = useCallback(async () => {
    if (value && toggleCheckBox) {
      try {
        setError(false);
        setCheckBoxError(false);
        setLoading(true);
        await setUser({
          name: userData.name,
          surname: userData.surname,
          dateBirth: value,
          phone: userData.phone,
        });
        setLoading(false);
        navigation.navigate('Home');
      } catch (err) {
        console.warn(error);
        setError(true);
        setLoading(false);
        Vibration.vibrate(50);
        Alert.alert('Ошибка', JSON.stringify(err));
      }
    } else {
      if (!value) {
        setError(true);
      }
      if (!toggleCheckBox) {
        setCheckBoxError(true);
      }
      Vibration.vibrate(50);
    }
  }, [value, error, navigation, toggleCheckBox]);

  const navigateBack = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.background}>
      <Pressable style={styles.flex} onPress={() => Keyboard.dismiss()}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <ImageBackground
          source={Images.Background}
          style={styles.imgBackgound}
          resizeMode="stretch">
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            extraScrollHeight={scaledSize(100)}>
            <HomeHeader leftIcon="back" leftPress={navigateBack} />
            <View style={styles.top}>
              <Icons.BigLogo height={90} width={67} style={styles.bigLogo} />
              <Text style={[styles.title, styles.btnTextStyle]}>
                ПРОЦЕС РЕЄСТРАЦІЇ
              </Text>
              <Text style={[styles.text, error && styles.error]}>
                Дата народження
              </Text>
              <StandardButton
                size="small"
                style={styles.outlinedBtn}
                title={value}
                onPress={showDatePicker}
                textStyle={styles.black}
              />
              <CheckBoxField
                error={checkBoxError}
                value={toggleCheckBox}
                toggle={setToggleCheckBox}
                text="Я погоджуюсь з правилами програми"
              />
            </View>
            <StandardButton
              title="Далі"
              onPress={goNext}
              size="small"
              style={styles.btn}
              textStyle={styles.btnTextStyle}
            />
          </KeyboardAwareScrollView>
        </ImageBackground>
      </Pressable>
      {datePickerVisible && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          is24Hour={true}
          display={'spinner'}
          locale={'uk-UA'}
          maximumDate={new Date()}
          minimumDate={new Date(1900, 1, 1)}
          onChange={changeDate}
        />
      )}
      <Spiner loading={loading} />
    </SafeAreaView>
  );
};
