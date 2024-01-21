import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {PlanPoint} from '../../components/PlanPoint/PlanPoint';
import Plus from '../../assets/icons/Plus.svg';
import {useNavigation} from '@react-navigation/native';
import * as PATHS from '../../navigation/paths';
import {PlanPointsStore} from '../../store/PlanPoints.store';
import {PlanPointProps} from '../../components/PlanPoint/PlanPoint.types';
import {useSnapshot} from 'valtio';

export const Home = () => {
  const {navigate} = useNavigation();
  const snapshot = useSnapshot(PlanPointsStore);

  const handleOnPlusButtonPress = () => {
    navigate(PATHS.PLAN_CREATOR);
  };

  return (
    <LinearGradient
      colors={['#FF8439', '#FFFFFF']}
      style={styles.container}
      start={{x: 0, y: 0.1}}
      end={{x: 0, y: 0.6}}>
      <View style={styles.dayInfoContainer}>
        <Text style={styles.dayTimeText}>07:00</Text>
        <Text style={styles.dayInfoText}>February, 01</Text>
      </View>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.bottomSheetHeader}>
          <TouchableOpacity onPress={handleOnPlusButtonPress}>
            <Plus width={30} height={30} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Plan for today</Text>
        </View>
        {snapshot.planPoints?.length === 0 ? (
          <Text style={{alignSelf: 'center'}}>Plan is empty</Text>
        ) : (
          <FlatList
            style={styles.planPointsList}
            data={snapshot.planPoints}
            renderItem={({item}: {item: PlanPointProps}) => (
              <PlanPoint
                type={item.type}
                name={item.name}
                priority={item.priority}
                isDone={false}
              />
            )}
          />
        )}
      </View>
    </LinearGradient>
  );
};
