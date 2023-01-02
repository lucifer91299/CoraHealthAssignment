import React from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
const {height, width} = Dimensions.get('window');
const AddToCardButtonView = styled(View)({
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  height: 60,
  margin: '0 30px 0 20px',
  borderRadius: 20,
  border: '1px solid #000',
});
const AddToCardButtonTouchableOpacity = styled(TouchableOpacity)({});

const AddToCardButton = () => {
  return (
    <AddToCardButtonView>
      <AddToCardButtonTouchableOpacity
        onPress={() => {
          Alert.alert('Add To Card');
        }}>
        <Text>Add To Card</Text>
      </AddToCardButtonTouchableOpacity>
    </AddToCardButtonView>
  );
};

export default AddToCardButton;
