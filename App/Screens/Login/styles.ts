import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {scaledSize, scaledY} from '../../Utils/Common';
const height = Dimensions.get('screen').height;
export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: scaledY(690),
    paddingBottom: scaledY(300),
  },
  header: {
    fontSize: scaledSize(34),
    lineHeight: scaledSize(50),
    marginTop: scaledSize(50),
    marginBottom: scaledSize(30),
  },
  inputContainer: {
    marginBottom: scaledSize(16),
  },

  inputStyle: {
    paddingHorizontal: scaledSize(5),

    fontSize: scaledSize(12),
    height: scaledSize(42),
    flex: 1,
    borderRadius: 15,
  },

  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
  flex: {flex: 1},
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
  picker: {},
  bigLogo: {
    marginTop: scaledY(26),
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    marginTop: scaledY(39),
    textAlign: 'center',
    fontWeight: '800',
  },
  text: {
    alignSelf: 'flex-start',
    //marginLeft: 32,
    marginTop: scaledY(38),
    marginBottom: scaledY(12),
  },
  btn: {
    width: scaledSize(311),
    //marginBottom: scaledY(100),
  },
  imgBackgound: {
    alignItems: 'center',
    height: height + scaledSize(60),
    top: scaledSize(-60),
    paddingTop: scaledSize(50),
  },
  top: {
    //alignItems: 'center',
  },
  btnTextStyle: {fontFamily: 'Intro', marginBottom: -4},
  error: {color: Colors.error},
});
