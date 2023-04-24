import {StyleSheet, Dimensions} from 'react-native';
import {scaledSize, scaledY} from '../../Utils/Common';
import {Colors} from '../../Constants/Colors';
const height = Dimensions.get('screen').height;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  logo: {
    marginTop: scaledY(54),
  },
  flex: {flex: 1},
  background: {
    flex: 1,
    alignItems: 'center',
  },
  imgBackgound: {
    alignItems: 'center',
    height: height + scaledSize(60),
    top: scaledSize(-60),
    paddingTop: scaledSize(50),
  },

  main: {
    borderRadius: scaledSize(20),
    width: scaledSize(354),
    height: scaledY(534),
    paddingLeft: scaledSize(26),
    paddingTop: scaledY(110),
    paddingBottom: scaledY(33),
    paddingRight: scaledSize(40),
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },

  inputCustom: {
    color: Colors.white,
  },
  topInput: {
    marginTop: scaledY(75),
    width: scaledSize(255),
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    paddingVertical: 3,
  },

  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaledY(12),
    width: scaledSize(311),
    overflow: 'hidden',
  },
  error: {
    borderColor: Colors.error,
    borderWidth: 1,
  },
  cell: {
    width: scaledSize(68),
    height: scaledSize(44),
    borderRadius: 10,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 8,
    shadowColor: Colors.textBlack,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    textShadowOffset: {width: 2, height: 5},
  },
  cellText: {
    fontSize: 24,
    fontWeight: '500',
  },

  btn: {},
  buttonView: {
    marginVertical: scaledY(24),
  },
  phone: {
    backgroundColor: Colors.white,
    padding: 0,
    flexDirection: 'row',
    borderWidth: scaledSize(1.2),
    borderRadius: scaledSize(15),
    borderColor: Colors.shadow,
    alignItems: 'center',
    paddingLeft: scaledSize(10),
    marginBottom: scaledY(16),
    height: scaledSize(44),
    shadowColor: Colors.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {width: 1, height: 5},
    elevation: 7,
    width: scaledSize(311),
  },
  inputStyle: {
    paddingHorizontal: scaledSize(5),

    fontSize: scaledSize(12),
    height: scaledSize(42),
    flex: 1,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    marginTop: scaledY(39),
    textAlign: 'center',
    fontWeight: '800',
  },
  text: {
    alignSelf: 'flex-start',
    marginLeft: 2,
    marginTop: scaledY(38),
    marginBottom: scaledY(12),
  },
  center: {alignSelf: 'center'},
  bigLogo: {
    marginTop: scaledY(-30),
    alignSelf: 'center',
    marginBottom: scaledSize(35),
  },
  btnTextStyle: {fontFamily: 'Intro', marginBottom: -4},
  top: {marginTop: scaledY(14)},
});
