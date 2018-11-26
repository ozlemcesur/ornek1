import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]



export default class App extends React.Component {
  
  renderRow ({ item }) {
  return (
    <ListItem
      roundAvatar
      title={item.name}
      subtitle={item.subtitle}
      avatar={{uri:item.avatar_url}}
    />
  )
}
  render() {
    return (
      <List>
     <FlatList
       data={list}
       renderItem={this.renderRow}
       keyExtractor={item => item.name}
     />
   </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
