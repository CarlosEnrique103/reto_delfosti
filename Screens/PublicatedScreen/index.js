import {FlatList, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectPublications} from '../../Store/publication/slice';

// changeStatePublication
import styles from './styles';

const renderPublicationItem = ({item: {id, title, description, state}}) => {
  // const dispatch = useDispatch();

  return (
    <View style={styles.listItem}>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
        {state && <Text style={styles.publicated}>Publicado</Text>}
        {!state && <Text style={styles.unpublicated}> No Publicado</Text>}
        <Button title="Cambiar" onPress={() => {}}></Button>
      </View>
    </View>
  );
};

const PublicatedScreen = () => {
  let publications = useSelector(selectPublications);
  publications = [...publications].filter(el => el.state);
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

export default PublicatedScreen;
