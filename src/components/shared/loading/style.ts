import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loadingText: {
    color: '#31A7F5',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
