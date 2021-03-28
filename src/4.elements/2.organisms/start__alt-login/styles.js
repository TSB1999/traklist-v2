import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  section: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  button_text: {
    flex: 5,
    paddingLeft: 10,
  },
  button_icon: {
    flex: 2,
    alignItems: 'center',
  },
});

export default styles;
