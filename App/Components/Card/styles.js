import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {scaledSize} from '../../Utils/Common';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 8,
    shadowColor: Colors.shadowColor,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingHorizontal: scaledSize(17.5),
    paddingLeft: scaledSize(10),
    width: scaledSize(331),
    height: scaledSize(59),
    shadowOffset: {width: 0, height: 7},
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: scaledSize(16),
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
  dot: {
    width: 11,
    height: 11,
    backgroundColor: '#FF0000',
    borderRadius: 6,
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    right: -2,
  },
  dotText: {
    fontSize: 7,
    fontWeight: '500',
    color: '#FFF',
  },
  width: {width: scaledSize(50)},
  opacity: {
    width: scaledSize(50),
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '500',
    letterSpacing: -0.28,
    color: Colors.textBrownColor,
  },
  small: {
    width: scaledSize(162),
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
