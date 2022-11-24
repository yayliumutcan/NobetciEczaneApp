import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e40613',
  },
  Logo_Container: {
    marginTop: 150,
    padding: 10,
    alignItems: 'center'
  },
  Input_Container: {
    padding: 10,
    marginTop: 40,
  },
  Input: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderRadius: 8,
  },
  Button_Container: {
    alignItems: 'flex-end'
  },
  Button: {
    marginTop: 10,
    marginRight: 10,
    backgroundColor: 'lightgreen',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
});