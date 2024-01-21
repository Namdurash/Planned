import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './planCreator.styles';
import {Button} from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {PlanPointsActions} from '../../store/PlanPoints.store';
import {RadioButton} from 'react-native-paper';
import {useAiModelCheckboxManager} from './useAiModelCheckboxManager';

export const PlanCreator = () => {
  const inputRef = useRef<TextInput>(null);
  const {goBack} = useNavigation();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const {state, dispatch, currentActiveCheckbox} = useAiModelCheckboxManager();

  const handleOnTextEditing = (value: string) => {
    setInputValue(value);
  };

  const handleOnConfirmPress = async () => {
    setLoading(true);

    const currentActiveState = currentActiveCheckbox();

    const test = await fetch(`http://10.0.2.2:3000/${currentActiveState}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({userInput: inputValue}),
    }).finally(() => setLoading(false));
    const resp = await test.json();

    PlanPointsActions.setPlanPoints(resp.data);

    goBack();
  };

  useEffect(() => {
    console.log(currentActiveCheckbox());
  }, [currentActiveCheckbox]);

  return (
    <LinearGradient
      colors={['#FF8439', '#F93A3A']}
      start={{x: 0, y: 0.4}}
      end={{x: 0, y: 0.9}}
      style={styles.container}>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      ) : (
        <ScrollView>
          <Text style={styles.title}>PLANNED</Text>
          <Text style={styles.subTitle}>Plan your day!</Text>
          <Text style={styles.firstDescription}>
            Write your daily activities 🏃
          </Text>
          <Text style={[styles.secondDescription, styles.topOffset]}>
            You can configure plan point on your own!
          </Text>
          <Text style={styles.secondDescription}>
            Just write in this pattern: activity [morning: medium]
          </Text>
          <View style={{marginTop: 10}}>
            <View style={styles.checkbox}>
              <RadioButton
                value="randomForest"
                status={state.randomForest ? 'checked' : 'unchecked'}
                onPress={() => dispatch({type: 'randomForest'})}
              />
              <Text style={styles.checkboxText}>Random Forest</Text>
            </View>
            <View style={styles.checkbox}>
              <RadioButton
                value="binaryTree"
                status={state.binaryTree ? 'checked' : 'unchecked'}
                onPress={() => dispatch({type: 'binaryTree'})}
              />
              <Text style={styles.checkboxText}>Binary Tree</Text>
            </View>
            <View style={styles.checkbox}>
              <RadioButton
                value="gradientBoosting"
                status={state.gradientBoosting ? 'checked' : 'unchecked'}
                onPress={() => dispatch({type: 'gradientBoosting'})}
              />
              <Text style={styles.checkboxText}>Gradient Boosting</Text>
            </View>
          </View>

          <TextInput
            ref={inputRef}
            style={styles.input}
            onChangeText={handleOnTextEditing}
            placeholder="For better experience, write activities separated by commas"
            placeholderTextColor="#00000060"
            numberOfLines={6}
            multiline
            textAlign="left"
            blurOnSubmit
          />
          <Button
            text="Confirm"
            onPress={handleOnConfirmPress}
            containerStyles={styles.button}
          />
        </ScrollView>
      )}
    </LinearGradient>
  );
};
