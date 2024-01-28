import React from 'react';
import {Text} from '../Text/Text';
import {View} from 'react-native';
import {styles} from './Header.styles';
import {COLORS} from '../../ui/colors';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text size={40} weight="Bold" color={COLORS.absoluteWhite}>
          PLANNED
        </Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text
          customStyles={styles.subTitle}
          size={24}
          family="DancingScript"
          color={COLORS.absoluteWhite}
          weight="Bold">
          Plan your day!
        </Text>
      </View>
    </View>
  );
};
