import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginLeft: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'green',
    marginTop: 8,
    marginLeft: 25,
    fontSize: 12,
  },
});

export default styles;
