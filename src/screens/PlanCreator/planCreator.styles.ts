import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 11,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 40,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  subTitle: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  firstDescription: {
    width: '50%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 45,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  topOffset: {
    marginTop: 33,
  },
  secondDescription: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    color: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  input: {
    height: 170,
    marginTop: 26,
    borderRadius: 20,
    padding: 12,
    textAlignVertical: 'top',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginTop: 65,
  },
});
