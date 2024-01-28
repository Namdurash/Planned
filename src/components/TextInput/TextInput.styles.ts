import {StyleSheet} from 'react-native';
import {COLORS} from '../../ui/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.absoluteWhite,
    borderRadius: 20,
    height: 40,
    paddingLeft: 20,
  },
  focusedContainer: {
    borderBottomWidth: 1,
    height: 40,
    borderBottomColor: COLORS.absoluteWhite,
  },
});
