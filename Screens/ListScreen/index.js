import {FlatList, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectPublications,
  changeStatePublication,
  deletePublication,
} from '../../Store/publication/slice';

import styles from './styles';

const ListScreen = () => {
  const publications = useSelector(selectPublications);
  const dispatch = useDispatch();

  const changeStateHandler = id => {
    dispatch(changeStatePublication(id));
  };

  const deleteHandler = id => {
    dispatch(deletePublication(id));
  };

  const renderPublicationItem = ({item: {id, title, description, state}}) => {
    return (
      <View style={styles.listItem}>
        <View>
          <Text>{title}</Text>
          <Text>{description}</Text>
          {state && <Text style={styles.publicated}>Publicado</Text>}
          {!state && <Text style={styles.unpublicated}> No Publicado</Text>}
          <Button
            title="Cambiar"
            onPress={() => changeStateHandler(id)}></Button>
          <Button title="Eliminar" onPress={() => deleteHandler(id)}></Button>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={item => item.id}
        data={publications}
        renderItem={renderPublicationItem}
        style={styles.listContainer}
      />
    </View>
  );
};

export default ListScreen;
