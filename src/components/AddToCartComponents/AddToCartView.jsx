import React from 'react';
import {ScrollView, View} from 'react-native';
import styled from 'styled-components';
import AddToCardButton from './AddToCartButton';

const AddToCardButtonViewStyle = styled(ScrollView)({
  height: '100%',
});

const AddToCartView = () => {
  return (
    <AddToCardButtonViewStyle>
      <AddToCardButton />
    </AddToCardButtonViewStyle>
  );
};
export default AddToCartView;
