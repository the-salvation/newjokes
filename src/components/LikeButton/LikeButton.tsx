import { FC } from 'react';
import { View } from 'react-native';
import { FavFilledIcon, FavOutlinedIcon } from '@assets';

type IconProps = {
  isLiked?: boolean;
  sizes?: {
    width?: number;
    height?: number;
  };
};

export const LikeButton: FC<IconProps> = ({ isLiked, sizes }) => (
  <View>
    {isLiked ? <FavFilledIcon {...sizes} /> : <FavOutlinedIcon {...sizes} />}
  </View>
);
