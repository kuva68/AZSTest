import {StyleSheet} from 'react-native';
import {scaledSize, scaledY} from '../../Utils/Common';
import {Colors} from '../../Constants/Colors';

export default StyleSheet.create({
  mainBlock: {
    backgroundColor: '#FFF',
    paddingTop: scaledSize(85),
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: scaledSize(55),
    paddingHorizontal: scaledSize(20),
    height: scaledY(664),
  },
  title: {
    fontSize: scaledSize(18),
    lineHeight: scaledSize(22),
    marginBottom: scaledY(32),
    textAlign: 'center',
  },
});
