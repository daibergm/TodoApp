import React from 'react';
import { Container, Fab, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

// Styles
const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5067FF',
  },
});

const AddToDoButtonComponent = ({ onClick }) => {
  return (
    <Container>
      <Fab style={styles.fab} position="bottomRight" onPress={onClick}>
        <Icon name="add" />
      </Fab>
    </Container>
  );
};

export default AddToDoButtonComponent;
