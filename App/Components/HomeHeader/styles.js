import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {scaledSize} from '../../Utils/Common';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaledSize(24),
    width: scaledSize(375),
    height: scaledSize(70),
    zIndex: 1000,
  },
  title: {
    fontSize: scaledSize(17),
    lineHeight: scaledSize(27),
    fontWeight: '600',
    color: Colors.textBrownColor,
    letterSpacing: 0.5,
  },
  arrowText: {
    fontSize: scaledSize(10),
    lineHeight: 24,
    fontWeight: '600',
    marginLeft: 2,
    color: Colors.textBrownColor,
    marginBottom: Platform.OS === 'ios' ? 1 : 2.5,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Colors.textBrownColor,
  },
  customIcon: {
    width: 24,
    height: 24,
  },

  width: {width: scaledSize(30), alignItems: 'flex-end'},
  opacity: {
    width: scaledSize(30),
    alignItems: 'flex-start',
    zIndex: 10000,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '500',
    letterSpacing: -0.28,
    color: Colors.textBrownColor,
  },
});
