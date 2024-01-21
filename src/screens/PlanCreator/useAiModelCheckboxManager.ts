import {useReducer} from 'react';
import {CheckboxState} from './PlanCreator.types';

export const useAiModelCheckboxManager = () => {
  const checkboxReducer = (state: CheckboxState, action: any) => {
    switch (action.type) {
      case 'randomForest': {
        return {randomForest: true, binaryTree: false, gradientBoosting: false};
      }
      case 'binaryTree': {
        return {randomForest: false, binaryTree: true, gradientBoosting: false};
      }
      case 'gradientBoosting': {
        return {randomForest: false, binaryTree: false, gradientBoosting: true};
      }
      default:
        throw new Error();
    }
  };
  const initialStates: CheckboxState = {
    randomForest: true,
    binaryTree: false,
    gradientBoosting: false,
  };
  const [state, dispatch] = useReducer(checkboxReducer, initialStates);

  const currentActiveCheckbox = () => {
    for (const key in state) {
      if (state[key]) {
        return key;
      }
    }
    return 'error';
  };

  return {
    state,
    dispatch,
    currentActiveCheckbox,
  };
};
