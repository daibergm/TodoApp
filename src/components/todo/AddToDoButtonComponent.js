import React from 'react';
import { Container, Fab, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

// Styles
const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5067FF',
  },
});

const AddToDoButtonComponent = () => {
  return (
    <Container>
      <Fab
        style={styles.fab}
        position="bottomRight"
        onPress={() => console.log('Add toDo button clicked')}>
        <Icon name="add" />
      </Fab>
    </Container>
  );
};

export default AddToDoButtonComponent;
