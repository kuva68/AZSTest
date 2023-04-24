import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {scaledSize, scaledY} from '../../Utils/Common';

const height = Dimensions.get('screen').height;
export default StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
  },
  imgBackgound: {
    alignItems: 'center',
    height: height + scaledSize(60),
    top: scaledSize(-60),
    paddingTop: scaledSize(50),
  },

  text: {
    fontSize: scaledSize(12),
    lineHeight: scaledSize(15),
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginBottom: scaledSize(18),
    marginLeft: scaledSize(24),
  },

  flatTopView: {
    width: scaledSize(375),
    paddingHorizontal: scaledSize(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaledY(20),
  },
  content: {},

  scroll: {
    paddingTop: scaledY(55),
    alignItems: 'center',
    width: scaledSize(375),
    paddingBottom: scaledSize(20),
  },
  touchable: {
    alignSelf: 'flex-start',
    marginLeft: scaledSize(20),
    marginTop: scaledY(11),
  },

  image: {
    width: scaledSize(331),
    height: scaledSize(156),
    margin: scaledSize(22),
  },
  persent: {marginBottom: scaledSize(18)},
  row: {
    flexDirection: 'row',
    width: scaledSize(331),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaledSize(18),
  },
  mapImg: {
    borderRadius: 15,
    width: scaledSize(331),
    height: scaledSize(118),
    marginBottom: 10,
  },
  smallCard: {
    paddingRight: scaledSize(30),
  },
});
