import { Platform } from 'react-native';

import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

import { COLORS, FONT_SIZES, LINE_HEIGHTS, shadowSizes, SIZES, SPACING } from '@styles';

import { Theme } from './types';

export const theme: Theme = {
  // Functions from react-native-size-matters
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,

  // Platform specific shadows
  shadowNone: {
    ...Platform.select({
      ...shadowSizes.none,
    }),
  },
  shadowSmall: {
    ...Platform.select({
      ...shadowSizes.small,
    }),
  },
  shadowMiddle: {
    ...Platform.select({
      ...shadowSizes.middle,
    }),
  },

  // Scaled spacing sizes
  none: SPACING.None,
  auto: SPACING.Auto,
  miniscule: scale(SPACING.Miniscule),
  smallest: scale(SPACING.Smallest),
  small: scale(SPACING.Small),
  xsmall: scale(SPACING.XSmall),
  medium: scale(SPACING.Medium),
  large: scale(SPACING.Large),
  xlarge: scale(SPACING.XLarge),
  xxlarge: scale(SPACING.XXLarge),
  massive: scale(SPACING.Massive),

  // Colors
  white: COLORS.white,
  lightGray: COLORS.lightGray,
  black: COLORS.black,
  purple: COLORS.purple,
  purpleish: COLORS.purpleish,
  grey: COLORS.grey,
  lightGrey: COLORS.lightGrey,
  darkerGrey: COLORS.darkerGrey,

  // Font sizes
  fontSmall: scale(FONT_SIZES.Small),
  fontMedium: scale(FONT_SIZES.Medium),
  fontLarge: scale(FONT_SIZES.Large),

  // Sizes
  sizeSmall: SIZES.small,
  sizeLarge: SIZES.large,

  // Line heights
  lineHeightSmall: LINE_HEIGHTS.small,
  lineHeightMedium: LINE_HEIGHTS.medium,
  lineHeightLarge: LINE_HEIGHTS.large,
};
