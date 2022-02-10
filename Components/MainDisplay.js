import React, { useState } from "react";
import { Text, FlatList } from 'react-native';
import ShoeCard from "./ShoeCard";

export default function MainDisplay() {
  const [shoeData, setShoeData] = useState([]);

  const renderShoeCard = ({ item }) => {
    return <ShoeCard shoeData={item}/>
  }

  return (
    <FlatList 
      data={shoeData}
      renderItem={renderShoeCard}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text>No data...</Text>}
    />
  )
}