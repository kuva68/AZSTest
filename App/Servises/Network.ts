import * as mobx from 'mobx';

//import AsyncStorage from '@react-native-async-storage/async-storage';
//import dayjs from 'dayjs';
//import { navigate } from './RootNavigation';

class UserData {
  phone = '';
  name = '';
  surname = '';
  dayBirth = '';
  countryCode = '';
  user = null;
  confirm = null;
  constructor() {
    // super(props)
    mobx.makeAutoObservable(this);
    //this.props = props;
    mobx.autorun(() => {});
  }
}

const userData = new UserData();
export default userData;
