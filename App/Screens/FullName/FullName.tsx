import React, {FC, useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground,
  Pressable,
  Keyboard,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import HomeHeader from '../../Components/HomeHeader';
import userData from '../../Servises/Network';
import {TextInput} from '../../Components';
import {string, object} from 'yup';
import {Images} from '../../Utils/Images';
import {scaledSize} from '../../Utils/Common';
import {Text} from '../../Components';
import {Icons} from '../../Utils/Icons';
import StandardButton from '../../Components/StandardButton';
import {useForm} from '../../hooks';
import {runInAction} from 'mobx';

export const RegistrationSchema = object({
  name: string().min(2).default(''),
  surname: string().min(2).default(''),
});

interface FullNameScreenProps {
  navigation: {
    navigate: (name: string) => void;
  };
}

export const FullNameScreen: FC<FullNameScreenProps> = ({navigation}) => {
  const [error, setError] = useState<string | null>(null);
  const isSurnameError = error?.includes('surname');
  const isNameError = error?.includes('name');

  const [form, setForm] = useForm(RegistrationSchema);
  const handleChange = (prop: 'name' | 'surname', textStr: string = '') => {
    setForm({[prop]: textStr});
  };

  const goNext = useCallback(async () => {
    RegistrationSchema.validate(form)
      .then(() => {
        runInAction(() => (userData.name = form.name));
        runInAction(() => (userData.surname = form.surname));
        navigation.navigate('BirthDate');
        setError(null);
      })
      .catch(err => {
        setError(err?.message);
      });
  }, [form, navigation]);
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
              <Text style={[styles.text, isNameError && styles.error]}>
                Ваше ім’я
              </Text>
              <TextInput
                preset="simple"
                onChangeText={e => handleChange('name', e)}
              />
              <Text style={[styles.text, isSurnameError && styles.error]}>
                Ваше прізвище
              </Text>
              <TextInput
                preset="simple"
                onChangeText={e => handleChange('surname', e)}
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
    </SafeAreaView>
  );
};
