import {FlatList, View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {selectPublications} from '../../Store/publication/slice';

import styles from './styles';

const renderPublicationItem = ({item: {id, title, description, state}}) => {
  return (
    <View style={styles.listItem}>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
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
