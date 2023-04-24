import {StyleSheet} from 'react-native';
import {scaledSize, scaledY} from '../../Utils/Common';
import {Colors} from '../../Constants/Colors';
export default StyleSheet.create({
  labelStyle: {
    fontSize: scaledSize(18),
    lineHeight: scaledSize(22),
    color: Colors.white,
    letterSpacing: 0.3,
  },
  container: {
    width: scaledSize(254),
    height: scaledY(812),
    backgroundColor: Colors.drawerColor,
    paddingTop: scaledY(100),
    paddingLeft: scaledSize(16),
  },
  back: {
    flexDirection: 'row',
    width: scaledSize(80),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scaledY(140),
    marginLeft: scaledSize(10),
  },
  item: {
    width: scaledSize(254),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: scaledY(16),
  },
  marginL: {marginLeft: scaledSize(12), marginBottom: 6},
});
