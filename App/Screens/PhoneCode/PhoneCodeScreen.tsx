/* eslint-disable no-catch-shadow */
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  SafeAreaView,
  View,
  Vibration,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Keyboard,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import TextInputMask from 'react-native-text-input-mask';
import CountryPicker from 'react-native-country-picker-modal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import HomeHeader from '../../Components/HomeHeader';
import userData from '../../Servises/Network';

import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Images} from '../../Utils/Images';
import {scaledSize} from '../../Utils/Common';
import {Text} from '../../Components';
import {Icons} from '../../Utils/Icons';
import StandardButton from '../../Components/StandardButton';
import {runInAction} from 'mobx';
import {Spiner} from '../../Components/Spiner/Spiner';
interface PhoneCodeScreenProps {
  navigation: {
    navigate: (name: string) => void;
  };
}
export const PhoneCodeScreen: FC<PhoneCodeScreenProps> = observer(
  ({navigation}) => {
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    const codeField = useRef(null);

    const onAuthStateChanged = useCallback(
      user => {
        if (user) {
          runInAction(() => (userData.user = user));
          runInAction(() => (userData.confirm = null));
          navigation.navigate('FullName');
        }
      },
      [navigation],
    );

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, [onAuthStateChanged]);

    const confirmCode = useCallback(async () => {
      try {
        await userData?.confirm?.confirm('22' + value);
      } catch (err) {
        setError(true);
        console.log('Invalid code.', err);
      }
    }, [value]);

    const goNext = useCallback(async () => {
      if (value.length === 4) {
        try {
          setError(false);
          setLoading(true);
          await confirmCode();

          setLoading(false);
        } catch (err) {
          console.warn(err);
          setError(true);
          setLoading(false);
          Vibration.vibrate(50);
          Alert.alert('Ошибка', JSON.stringify(err));
        }
      } else {
        setError(true);
        Vibration.vibrate(50);
      }
    }, [value, confirmCode]);

    useEffect(() => {
      if (value.length === 4) {
        goNext();
      }
    }, [value, goNext]);

    const navigateBack = useCallback(() => {
      navigation.navigate('Login');
    }, [navigation]);

    return (
      <SafeAreaView style={styles.background}>
        <Spiner loading={loading} />
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
              extraScrollHeight={scaledSize(70)}>
              <HomeHeader leftIcon="back" leftPress={navigateBack} />
              <View style={styles.top}>
                <Icons.BigLogo height={90} width={67} style={styles.bigLogo} />
                <Text style={[styles.title, styles.btnTextStyle]}>
                  ПРОЦЕС РЕЄСТРАЦІЇ
                </Text>
                <Text style={styles.text}>Ваш номер телефону</Text>
                <View style={styles.phone}>
                  <CountryPicker
                    withFlag
                    countryCode={userData.countryCode}
                    style={styles.picker}
                    visible={false}
                  />
                  <TextInputMask
                    style={[styles.inputStyle]}
                    textContentType="telephoneNumber"
                    placeholder="+038 (___) ___-____"
                    mask="+ [00] ([000])-[000]-[0000]"
                    value={userData.phone}
                    editable={false}
                  />
                </View>
                <Text style={[styles.text, styles.top]}>Введіть код з SMS</Text>
                <CodeField
                  value={value}
                  onChangeText={setValue}
                  cellCount={4}
                  {...props}
                  rootStyle={styles.inputsContainer}
                  keyboardType="number-pad"
                  textContentType={'oneTimeCode'}
                  autoFocus={true}
                  ref={codeField}
                  renderCell={({index, symbol, isFocused}) => (
                    <View
                      key={index}
                      style={[styles.cell, error && styles.error]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      <Text style={styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    </View>
                  )}
                />
                <TouchableOpacity style={[styles.buttonView, styles.center]}>
                  <Text>Надіслати код повторно</Text>
                </TouchableOpacity>
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
      </SafeAreaView>
    );
  },
);
