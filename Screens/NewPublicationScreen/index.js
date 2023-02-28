import {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import styles from './styles';
import Input from '../../components/Input';

import {useDispatch} from 'react-redux';
import {addPublication} from '../../Store/publication/slice';

const NewPublicationScreen = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const submitHandler = () => {
    dispatch(addPublication(form));
    setForm({
      title: '',
      description: '',
    });
  };

  const inputChangeHandler = (id, text) => {
    setForm(prev => ({
      ...prev,
      [id]: text,
    }));
  };

  return (
    <View style={styles.container}>
      <Input
        id="title"
        placeholder="Tittle"
        onChangeText={inputChangeHandler}
        value={form.title}
      />

      <Input
        id="description"
        placeholder="Description"
        onChangeText={inputChangeHandler}
        value={form.description}
      />
      <Pressable onPress={submitHandler}>
        <Text>Enviar</Text>
      </Pressable>
    </View>
  );
};

export default NewPublicationScreen;
