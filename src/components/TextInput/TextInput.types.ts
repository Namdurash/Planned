import {Dispatch, SetStateAction} from 'react';
import {TextInputProps as NativeTextInputProps, ViewStyle} from 'react-native';

export interface TextInputProps extends NativeTextInputProps {
  text?: string;
  setText: Dispatch<SetStateAction<string>>;
  customStyles?: ViewStyle;
}
