import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  avoidingView: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 4,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    marginBottom: 10,
  },
  goSignUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 5,
    justifyContent: 'center',
  },
  signUpText: {
    color: 'green',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default styles;
