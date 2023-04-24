import {StyleSheet} from 'react-native';
import {scaledSize, scaledY} from '../../Utils/Common';
import {Colors} from '../../Constants/Colors';
export default StyleSheet.create({
  error: {
    color: Colors.error,
  },

  text: {
    alignSelf: 'flex-start',
    marginLeft: 2,
    marginTop: scaledY(38),
    marginBottom: scaledY(12),
  },

  checkBoxView: {
    width: scaledSize(311),
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    height: scaledSize(32),
    marginTop: scaledY(29),
  },
  underline: {},
  textView: {
    borderColor: Colors.textBlack,
    borderBottomWidth: 1,
    height: scaledSize(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
