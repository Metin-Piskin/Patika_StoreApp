import React from 'react'
import { View, Text ,FlatList,StyleSheet,TextInput } from 'react-native'
import patikaProducts from "././news_data.json"
import ProductCard from "./components/NewsCard"

const App = () => {
  const renderProducts = ({item}) => <ProductCard products={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patika Store</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
      />
      <FlatList
        numColumns={2}
        data={patikaProducts}
        renderItem={renderProducts}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },
  header:{
    fontSize:40,
    color:"#800080",
    fontWeight:"bold",
    marginLeft:10,
  },
  input: {
    height: 40,
    margin: 10,
    borderRadius:5,
    padding: 10,
    backgroundColor:"#eee"
  },

})

export default App
