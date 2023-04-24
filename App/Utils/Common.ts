import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const shortDimension = width < height ? width : height;
const longDimensions = width > height ? width : height;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 810;
export const scaledSize = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
export const scaledY = (size: number) =>
  (longDimensions / guidelineBaseHeight) * size;
