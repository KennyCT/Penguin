
import React, { Component, useState } from "react"; 
import { StyleSheet, Text, View, FlatList, ImageBackground, Pressable, Modal } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 
import filter from "lodash.filter"; 

import { Link, router } from 'expo-router';

import EntypoIcon from 'react-native-vector-icons/Entypo';

import Ionicon from 'react-native-vector-icons/Ionicons';

const DATA = [ 
  { 
    id: "1", 
    title: "RPI", 
    description: "Rensselaer Polytechnic Institute",
    image: require('@/assets/images/bks/rpi.jpg'),
  }, 
  { 
    id: "2", 
    title: "MIT", 
    description: "Massachusetts Institute of Technology",
    image: require('@/assets/images/bks/mit.jpg'),
  }, 
  { 
    id: "3", 
    title: "Troy", 
    description: "Troy, NY, Home of Uncle Sam",
    image: require('@/assets/images/bks/troy.jpg'),
  }, 
  { 
    id: "4", 
    title: "NYC", 
    description: "New York City",
    image: require('@/assets/images/bks/nyc.jpg'),
  }, 
  { 
    id: "5", 
    title: "Mass.", 
    description: "Massachusetts, The Bay State",
    image: require('@/assets/images/bks/mass.jpg'),
  }, 
  { 
    id: "6", 
    title: "TX", 
    description: "The Great State of Texas",
    image: require('@/assets/images/bks/tx.jpg'),
  },
]; 
  
const Item = ({ title, image, description }) => { 

  const [modalVisible, setModalVisible] = useState(false);

  return ( 

  <View>  

    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Join {title} Iceberg</Text>
          <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
            <Ionicon style={styles.join_icon} name="close" size={30} />
          </Pressable>
          <Pressable style={styles.request_btn}>
            <EntypoIcon style={styles.join_icon} name="plus" size={30} />
            <Text style={styles.title_text}>Request verification</Text>  
          </Pressable>
        </View>
      </View>
    </Modal>

    <View style={styles.item}> 
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <ImageBackground source={image} style={styles.iceberg_img} imageStyle={{ borderRadius: 15, opacity: 0.5}}>
          <EntypoIcon style={styles.join_icon} name="plus" size={30} />
          <Text style={styles.title_text}>{title}</Text>  
          <Text style={styles.description_text}>{description}</Text>
        </ImageBackground>
      </Pressable>
    </View> 
    
  </View>

  ); 
}; 
  
const renderItem = ({ item }) => <Item title={item.title} image={item.image} description={item.description}/>; 
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

  request_btn: {
    borderWidth: 2,
    borderColor: '#007AFF',
    color: "#007AFF",
  },

  item: { 
    backgroundColor: "#292826", 
    //padding: 10, 
    borderRadius: 15,
    //borderWidth: 5,
    //borderColor: 'red',
    height: 50,
    marginVertical: 8, 
    marginHorizontal: 16, 
    width: '90%',
  }, 

  iceberg_img: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
    //opacity: 0.8,

  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: '#292826',
    color: 'white',
    borderRadius: 10,
    width: '90%',
    height: 400,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  buttonClose: {
    position: 'absolute',
    right: 0,
  },

  join_icon: {
    position: 'absolute',
    right: 0,
    //borderWidth: 1,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 3,
  },

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

  title_text: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 3,
    fontSize: 18,
    opacity: 1.0,
  },
  description_text: {
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 1,
  },

});