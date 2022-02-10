import React from 'react';
import { Text } from 'react-native-web';

export default function ShoeCard({ shoeData }) {
  return (
    <Text>
      {shoeData.description}
    </Text>
  )
}