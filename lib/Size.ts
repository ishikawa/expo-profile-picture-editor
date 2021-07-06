// https://github.com/nirsky/react-native-size-matters/blob/master/lib/scaling-utils.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

// Based on iPhone 11 X
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
export const vscale = (size: number) => (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;
export const moderateVScale = (size: number, factor = 0.5) => size + (vscale(size) - size) * factor;
