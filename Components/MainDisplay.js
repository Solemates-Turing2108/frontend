import React, { useState } from "react";
import { Text, FlatList } from 'react-native';
import ShoeCard from "./ShoeCard";

export default function MainDisplay() {
  const [shoeData, setShoeData] = useState([{description: 'dog', id: 1}, {description: 'blog', id: 2}]);

  const renderShoeCard = ({ item }) => {
    return <ShoeCard shoeData={item}/>
  }

  return (
    <FlatList 
      data={shoeData}
      renderItem={renderShoeCard}
      keyExtractor={(item) => item.id}
    />
  )
}