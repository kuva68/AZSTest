import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {scaledSize} from '../../Utils/Common';
import {Colors} from '../../Constants/Colors';

interface TextInputStyles {
  inputContainer: ViewStyle;
  textInput: TextStyle;
  accentBorder: ViewStyle;
}

export type TextInputPreset = 'simple' | 'accent';

type TextInputPresetStyles = {
  [preset in TextInputPreset]: TextInputStyles;
};

const styles: TextInputPresetStyles = {
  simple: StyleSheet.create<TextInputStyles>({
    inputContainer: {
      borderRadius: scaledSize(15),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
      elevation: 8,
      shadowColor: Colors.shadow,
      shadowOffset: {width: 2, height: 5},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      width: scaledSize(311),
      height: scaledSize(44),
    },
    textInput: {
      flex: 1,
      paddingHorizontal: scaledSize(10),
      color: Colors.textBlack,
    },
    accentBorder: {
      display: 'none',
    },
  }),
  accent: StyleSheet.create<TextInputStyles>({
    inputContainer: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.drawerColor,
      backgroundColor: Colors.white,
      borderRadius: scaledSize(6),
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      paddingHorizontal: scaledSize(11),
      fontSize: scaledSize(13),
      borderRadius: scaledSize(6),
      color: Colors.textBlack,
      backgroundColor: Colors.white,
    },
    accentBorder: {
      height: scaledSize(12),
      width: '35%',
      borderRadius: scaledSize(6),
      position: 'absolute',
      backgroundColor: Colors.drawerColor,
      bottom: -2.5 - StyleSheet.hairlineWidth,
    },
  }),
};

export default styles;
