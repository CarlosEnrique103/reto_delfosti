import {View, TextInput} from 'react-native';
import styles from './styles';

const Input = ({id, placeholder, onChangeText, value}) => {
  const changeTextHandler = text => {
    onChangeText(id, text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={changeTextHandler}
          value={value}
        />
      </View>
    </View>
  );
};

export default Input;
