import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {scaledSize} from '../../Utils/Common';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    width: scaledSize(333),
    height: scaledSize(58),
    borderRadius: 15,
    backgroundColor: Colors.drawerColor,
    paddingBottom: 2,
    shadowOffset: {width: 2, height: 5},
  },
  title: {
    fontSize: scaledSize(18),
    lineHeight: scaledSize(22),
    fontWeight: '600',
    color: Colors.white,
    letterSpacing: 0.5,
    textAlign: 'center',
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

  dotText: {
    fontSize: 7,
    fontWeight: '500',
    color: '#FFF',
  },
  width: {width: scaledSize(50)},

  small: {
    height: scaledSize(44),
  },
  smallText: {width: scaledSize(90), lineHeight: 18},
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scaledSize(263),
  },
  sm: {
    width: scaledSize(94),
  },
});
