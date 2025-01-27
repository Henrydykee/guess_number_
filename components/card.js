import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../util/colors';

function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 20,
    backgroundColor: Colors.Primary500,
    borderRadius: 8,
    elevation: 4, // For Android shadow
    shadowColor: 'black', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
