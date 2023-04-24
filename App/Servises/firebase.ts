import firestore from '@react-native-firebase/firestore';
import {IUserData} from './types';

export const getUser = async () =>
  await firestore().collection('UserData').doc('USER').get();

export const setUser = (data: IUserData) => {
  firestore()
    .collection('UserData')
    .doc('USER')
    .set(data)
    .then(() => {
      console.log('User added!');
    });
};
