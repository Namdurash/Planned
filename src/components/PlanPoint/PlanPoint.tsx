import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {PlanPointDayPart} from '../../types/PlanPoint';
import WaitIcon from '../../assets/icons/ProgressV2.svg';
import DoneIcon from '../../assets/icons/Done.svg';
import {PlanPointProps} from './PlanPoint.types';

const dayPartMap = new Map<PlanPointDayPart, string>([
  ['afternoon', '#FF7A00'],
  ['morning', '#F8C291'],
  ['evening', '#2B4486'],
]);

const DEFAULT_COLOR = '#2AA198';

export const PlanPoint = ({type, name, priority, isDone}: PlanPointProps) => {
  const dayPart = dayPartMap.get(type);
  const textColor = type === 'evening' && {color: '#FFFFFF'};

  return (
    <LinearGradient
      colors={[dayPart || DEFAULT_COLOR, '#FFFFFF']}
      start={{x: 0, y: 0}}
      end={{x: 0.95, y: 0}}
      style={styles.container}>
      <TouchableOpacity style={{position: 'absolute', top: 10, left: 10}}>
        {isDone ? (
          <DoneIcon width={35} height={35} />
        ) : (
          <WaitIcon width={35} height={35} />
        )}
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, textColor]}>{name}</Text>
        <Text style={[styles.timeRange, textColor]}>{priority}</Text>
      </View>
    </LinearGradient>
  );
};
