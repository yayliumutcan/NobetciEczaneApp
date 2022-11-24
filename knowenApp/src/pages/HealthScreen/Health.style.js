import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 40,
    paddingTop: 20,
    paddingLeft: 15,
    fontWeight: '500',
    color: 'white',
  },
  textInput: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    padding: 10,
    paddingVertical: 12,
    marginTop: 12,
    marginBottom: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 18,
    color: 'black',
    fontWeight: '300',
    borderRadius: 5,
    borderColor: 'red',
  },
  City_Container: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  Icon: {
    color: '#404258'
  },
  City_Text: {
    color: '#404258',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  Loading: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});