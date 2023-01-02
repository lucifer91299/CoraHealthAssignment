import React, {useCallback, useEffect, useRef, useState} from 'react';

import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import AddToCardButton from '../AddToCartComponents/AddToCartButton';
import CancellationPolicy from './CancellationPolicy';
import Discount from './Discounts';
import InformationAboutDelivery from './InformationAboutDelivery';
import ProductDiscription from './ProductDiscription';
import ProductImage from './ProductImage';
import RefundPolicy from './RefundPolicy';

const {height, width} = Dimensions.get('window');
const ProductView = styled(ScrollView)({
  height: '60%',
  backgroundColor: 'black',
});

const ProductImageView = styled(View)({
  height: '40%',
  width: width,
});

const index = () => {
  const [show, setShow] = useState(true);
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const [key, setKey] = useState(0);
  const ScrollRef = useRef();
  useEffect(() => {
    console.log('ghsvhjcsbjcbsjh', show);
  }, [[show]]);
  return (
    <View
      style={{
        height: '100%',
        marginLeft: 20,
        marginRight: 20,
      }}>
      {/* <ProductView> */}
      <ScrollView
        ref={ScrollRef}
        decelerationRate={0}
        // stickyHeaderIndices={[4]}
        // invertStickyHeaders={true}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'center'}
        onScroll={e => {
          try {
            // console.log(
            //   dataSourceCords[4].addtocard -
            //     e.nativeEvent.layoutMeasurement.height <
            //     e.nativeEvent.contentOffset.y,
            // );
            if (
              dataSourceCords[4].addtocard -
                e.nativeEvent.layoutMeasurement.height <
              e.nativeEvent.contentOffset.y
            ) {
              setShow(false);
            } else {
              setShow(true);
            }
          } catch (e) {
            setShow(false);
          }
        }}
        style={{
          display: 'flex',
          height: '100%',
        }}>
        <View
          key={0}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[0] = {imageView: layout.y};
            setDataSourceCords(dataSourceCords);
            //console.log(dataSourceCords);
          }}>
          <ProductImage />
        </View>

        {/* Product Name */}
        <View
          key={1}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[1] = {productname: layout.y};
            setDataSourceCords(dataSourceCords);
            //console.log(dataSourceCords);
          }}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingBottom: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>Lorem ipsum</Text>
          <Text style={{fontSize: 10}}>Lorem ipsum dolor sit amet.</Text>
        </View>

        {/* Product price and Discord */}
        <View
          key={2}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[2] = {productprice: layout.y};
            setDataSourceCords(dataSourceCords);
            //console.log(dataSourceCords);
          }}
          style={{
            width: Dimensions.get('window').width * 0.7,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'flex-start',
            paddingBottom: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            Price:
          </Text>
          <Text
            style={{
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}>
            {' '}
            ₹500
          </Text>
          <Text>₹250</Text>
          <Discount />
        </View>

        {/* Product Discription */}
        <View
          key={3}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[3] = {productdiscription: layout.y};
            setDataSourceCords(dataSourceCords);
            //console.log(dataSourceCords);
          }}>
          <ProductDiscription />
        </View>

        {/* Product Add to cart */}

        <View
          key={4}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[4] = {addtocard: layout.y};
            setDataSourceCords(dataSourceCords);
            //console.log(dataSourceCords);
          }}>
          {/* add to card button */}
          <AddToCardButton />
        </View>

        {/* Product info */}
        <View
          key={5}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[5] = {infoaboutdelivery: layout.y};
            setDataSourceCords(dataSourceCords);
            //console.log(dataSourceCords);
          }}>
          {/* Information about delivery dates */}
          <InformationAboutDelivery />
        </View>

        {/* Product cancellation */}
        <View
          key={6}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[6] = {cancellationpolicy: layout.y};
            setDataSourceCords(dataSourceCords);
            //console.log(dataSourceCords);
          }}>
          {/* Cancellation policy */}
          <CancellationPolicy />
        </View>

        {/* Refund policy */}
        <View
          key={7}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[7] = {refundpolicy: layout.y};
            setDataSourceCords(dataSourceCords);
            //console.log(dataSourceCords);
          }}>
          <RefundPolicy />
        </View>
      </ScrollView>
      {show ? (
        <View>
          <AddToCardButton
            dataSourceCords={dataSourceCords}
            setDataSourceCords={setDataSourceCords}
          />
        </View>
      ) : null}
    </View>
  );
};
export default index;
