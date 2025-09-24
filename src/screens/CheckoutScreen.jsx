import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { RF } from '../Utils/Responsive';
import { White, Secondary } from '../styles/colors/colorsCode';
import { MinusIcon, PlusIcon, DeleteIcon } from '../assets/Index';

const CheckoutScreen = ({ route }) => {
  const { selectedItems, counts } = route.params;
  const [cartCounts, setCartCounts] = useState(counts);

  const increaseCount = item => {
    setCartCounts(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
  };

  const decreaseCount = item => {
    setCartCounts(prev => {
      const updated = { ...prev };
      if ((updated[item.id] || 1) > 1) {
        updated[item.id] -= 1;
      } else {
        delete updated[item.id];
      }
      return updated;
    });
  };

  const getTotalPrice = () =>
    selectedItems.reduce(
      (sum, item) => sum + (parseFloat(item.price) * (cartCounts[item.id] || 0)),
      0
    );

  return (
    <View style={{ flex: 1, backgroundColor: White, padding: RF(15) }}>
      <FlatList
        data={selectedItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          cartCounts[item.id] ? (
            <View style={styles.cartItem}>
              <Image source={item.source} style={styles.cartImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cartName}>{item.name}</Text>
                <Text style={styles.cartPrice}>${item.price}</Text>
              </View>

              <View style={styles.cartControls}>
                <TouchableOpacity onPress={() => decreaseCount(item)}>
                  <Image
                    source={cartCounts[item.id] <= 1 ? DeleteIcon : MinusIcon}
                    style={[styles.icon, cartCounts[item.id] <= 1 && { tintColor: 'red' }]}
                  />
                </TouchableOpacity>
                <Text style={styles.cartCount}>{cartCounts[item.id]}</Text>
                <TouchableOpacity onPress={() => increaseCount(item)}>
                  <Image source={PlusIcon} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          ) : null
        }
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice().toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={{ color: White, fontSize: RF(16), fontWeight: '600' }}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RF(15),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: RF(10),
  },
  cartImage: {
    width: RF(50),
    height: RF(50),
    resizeMode: 'contain',
    marginRight: RF(10),
  },
  cartName: {
    fontSize: RF(14),
    fontWeight: '600',
    color: '#333',
  },
  cartPrice: {
    fontSize: RF(12),
    color: Secondary,
  },
  cartControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RF(10),
  },
  icon: {
    width: RF(18),
    height: RF(18),
    resizeMode: 'contain',
    tintColor: Secondary,
  },
  cartCount: {
    fontSize: RF(14),
    fontWeight: '600',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: RF(10),
  },
  totalText: {
    fontSize: RF(16),
    fontWeight: '700',
    marginBottom: RF(10),
  },
  checkoutBtn: {
    backgroundColor: Secondary,
    padding: RF(12),
    borderRadius: RF(8),
    alignItems: 'center',
  },
});
