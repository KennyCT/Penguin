
import React, { Component } from "react"; 
import { StyleSheet, Text, View, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 
import filter from "lodash.filter"; 
  
const DATA = [ 
  { 
    id: "1", 
    title: "RPI", 
  }, 
  { 
    id: "2", 
    title: "MIT", 
  }, 
  { 
    id: "3", 
    title: "Troy", 
  }, 
  { 
    id: "4", 
    title: "NYC", 
  }, 
  { 
    id: "5", 
    title: "Mass.", 
  }, 
  { 
    id: "6", 
    title: "TX", 
  },
]; 
  
const Item = ({ title }) => { 
  return ( 
    <View style={styles.item}> 
      <Text style={styles.item_text}>{title}</Text> 
    </View> 
  ); 
}; 
  
const renderItem = ({ item }) => <Item title={item.title} />; 
class SearchIcebergs extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      loading: false, 
      data: DATA, 
      error: null, 
      searchValue: "", 
    }; 
    this.arrayholder = DATA; 
  } 
  
  searchFunction = (text) => { 
    const updatedData = this.arrayholder.filter((item) => { 
      const item_data = `${item.title.toUpperCase()})`; 
      const text_data = text.toUpperCase(); 
      return item_data.indexOf(text_data) > -1; 
    }); 
    this.setState({ data: updatedData, searchValue: text }); 
  }; 
  
  render() { 
    return ( 
      <View style={styles.container}> 
        <SearchBar
          placeholder="Search..."
          containerStyle={styles.searchbar}
          //darkTheme 
          //round 
          //platform="ios"
          value={this.state.searchValue} 
          onChangeText={(text) => this.searchFunction(text)} 
          autoCorrect={false} 
        /> 
        <FlatList 
          data={this.state.data} 
          renderItem={renderItem} 
          keyExtractor={(item) => item.id} 
        /> 
      </View> 
    ); 
  } 
} 
  
export default SearchIcebergs; 
  
const styles = StyleSheet.create({ 
  container: { 
    marginTop: 30, 
    padding: 2, 
    borderWidth: 1,
    //borderColor: 'red',
    width: '90%',
  }, 
  searchbar: {
    //backgroundColor: 'red',
    //borderWidth: 10,
    //borderWidth: 1,
    padding: 0,
    width: '100%',
  },
  item: { 
    backgroundColor: "#292826", 
    padding: 20, 
    marginVertical: 8, 
    marginHorizontal: 16, 
    width: '90%',
  }, 
  item_text: {
    color: 'white',
  },
});