import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
} from 'react-native';
import CountryPicker, {Country} from 'react-native-country-picker-modal';
import styles from './styles';
import {useForm} from '../../hooks';
import TextInputMask from 'react-native-text-input-mask';
import StandardButton from '../../Components/StandardButton';
import userData from '../../Servises/Network';
import {string, object} from 'yup';
import {Icons} from '../../Utils/Icons';
import {Text} from '../../Components';
import {Images} from '../../Utils/Images';
import {runInAction} from 'mobx';
import auth from '@react-native-firebase/auth';

import {NavigationProp} from '@react-navigation/native';
import {RootParams} from '../../navigation/AppNavigation';

export interface LoginProps {
  navigation: NavigationProp<RootParams, 'Login'>;
}
export const RegistrationSchema = object({
  phone: string().required().default('+380').min(10),
  countryCode: string().default('UA'),
});

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
  const inputRef = useRef<TextInput>();
  const [form, setForm] = useForm(RegistrationSchema);
  const [error, setError] = useState<string | null>(null);
  const handleNumberChanged = (preview: string, value: string = '') => {
    setForm({phone: value});
  };

  const onSelect = (country: Country) => {
    setForm({countryCode: country.cca2});
    inputRef?.current?.setNativeProps({text: `+${country.cca2} (0`});
    inputRef?.current?.focus();
  };
  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber('+' + phoneNumber);
    runInAction(() => (userData.confirm = confirmation));
  }
  const onRegistrPressed = async () => {
    RegistrationSchema.validate(form)
      .then(() => signInWithPhoneNumber('+' + form.phone))
      .then(() => {
        runInAction(() => (userData.phone = form.phone));
        runInAction(() => (userData.countryCode = form.countryCode));
        navigation.navigate('PhoneCode');
        setError(null);
      })
      .catch(err => {
        setError(JSON.stringify(err));
      });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Pressable style={styles.flex} onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          source={Images.Background}
          resizeMode="stretch"
          style={styles.imgBackgound}>
          <KeyboardAvoidingView behavior="padding" style={styles.body}>
            <View style={styles.top}>
              <Icons.BigLogo height={90} width={120} style={styles.bigLogo} />
              <Text style={[styles.title, styles.btnTextStyle]}>
                ПРОЦЕС РЕЄСТРАЦІІ
              </Text>
              <Text style={[styles.text, error && styles.error]}>
                Введіть Ваш номер телефону
              </Text>
              <View style={styles.phone}>
                <CountryPicker
                  onSelect={onSelect}
                  withFlag
                  countryCode={form.countryCode}
                  style={styles.picker}
                  withAlphaFilter
                />
                <TextInputMask
                  style={[styles.inputStyle]}
                  onChangeText={handleNumberChanged}
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  placeholder="+38 (___) ___-____"
                  mask="+ [00] ([000])-[000]-[0000]"
                  refInput={ref => (inputRef.current = ref)}
                  value={form.phone}
                />
              </View>
            </View>

            <StandardButton
              title="Далі"
              onPress={onRegistrPressed}
              size="small"
              style={styles.btn}
              textStyle={styles.btnTextStyle}
            />
          </KeyboardAvoidingView>
        </ImageBackground>
      </Pressable>
    </SafeAreaView>
  );
};
export default LoginScreen;
