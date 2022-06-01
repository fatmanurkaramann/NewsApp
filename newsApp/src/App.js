import React from "react";
import {View,Text,FlatList,StyleSheet, ScrollView,Image, Dimensions} from "react-native";
import news_data from "./news_data.json"
import news_banner_data from "./news_banner_data.json"
import NewsCard from "./components/NewsCard";

const App=()=>{
  const renderItem=({item})=> <NewsCard news={item}></NewsCard>
  const headerItem=<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {news_banner_data.map(bannerNews=>{
    return <Image style={styles.image} source={{uri:bannerNews.imageUrl}}></Image>
  })}
 </ScrollView>
  return(
    <View style={styles.container}>
      
      <FlatList ListHeaderComponent={headerItem}
      showsVerticalScrollIndicator={false}
      data={news_data}
      renderItem={renderItem}

      ></FlatList>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:5
  },
  image:{
    width:Dimensions.get("window").width/2,
    height:200
  }
})

export default App;