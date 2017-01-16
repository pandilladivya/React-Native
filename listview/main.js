import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,ListView,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //A rowHasChanged function is required to use ListView.
    //Here we just say a row has changed if the row we are on is not the same as the previous row.

    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]) //dataSource is the source of information for the list.
    };
  }
  //Initialize the hardcoded data
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
    //The ListView component requires two props: dataSource and renderRow.
    //renderRow takes one item from the source and returns a formatted component to render.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
  },
});

Exponent.registerRootComponent(App);
