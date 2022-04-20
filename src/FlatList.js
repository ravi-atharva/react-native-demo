import * as React from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import styles from './styles/DefaultStyle';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3io53abb28ba',
    title: 'Fourth Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-tyd91aa97f63',
    title: 'Fifth Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-678571e29d72',
    title: 'Sixth Item'
  }
];
class FlatListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
    const renderItem = ({ item }) => <Item title={item.title} />;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default FlatListPage;
