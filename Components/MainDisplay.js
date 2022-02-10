import React, { useEffect, useState } from "react";
import { Text, FlatList } from 'react-native';
import ShoeCard from "./ShoeCard";
import { getAllShoes } from '../Services/apiService';

export default function MainDisplay() {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    updateShoeData();
  }, []);

  const updateShoeData = async () => {
    const { shoes } = await getAllShoes();
    setShoeData(shoes);
  };

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