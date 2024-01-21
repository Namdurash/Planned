import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayInfoContainer: {
    marginTop: 44,
    marginBottom: 100,
    alignItems: 'center',
  },
  dayTimeText: {
    fontSize: 80,
    color: '#FFFFFF',
    fontFamily: 'Jost-Regular',
  },
  dayInfoText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Jost-Regular',
  },
  bottomSheetContainer: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    marginTop: 17,
    marginBottom: 11,
    paddingHorizontal: 25,
  },
  headerTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Jost-Regular',
    marginLeft: 90,
  },
  planPointsList: {
    marginHorizontal: 15,
  },
});
