import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Card_Container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
    paddingVertical:18,
    paddingHorizontal:25,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  Header_Container: {
    alignItems: 'center',
  },
  Header_Image: {
    width: 200,
    height: 200,
  },
  Header_Text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    paddingTop: 10,
  },
  Inner_Container: {
    paddingVertical: 10,
  },
  Adress_Text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    paddingBottom: 5
  },
  Adress_Text_Inner: {
    fontWeight: '400',
    fontSize: 14
  },
  Telephone_Text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  },
  Telephone_Text_Inner: {
    fontWeight: '400',
    fontSize: 14
  },
  Contact_Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  Map_Button_Container: {
    color: 'red',
    fontSize: 20,
    fontWeight: '700',
    flexDirection: 'row'
  },
  Map_Icon: {
    color: 'black'
  },
  Map_Text: {
    color: 'black',
    fontSize: 16,
  },
  Phone_Button_Container: {
    color: 'red',
    fontSize: 20,
    fontWeight: '700',
    flexDirection: 'row',
  },
  Phone_Icon: {
    color: 'black'
  },
  Phone_Text: {
    color: 'black',
    fontSize: 16,
  },

});