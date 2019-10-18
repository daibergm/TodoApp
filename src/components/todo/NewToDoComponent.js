import React, { useState } from 'react';
import { Body, Icon, ListItem, Input, Button } from 'native-base';

const NewToDoComponent = ({ onClick, onCancel }) => {
  const [title, setTitle] = useState('');

  return (
    <ListItem>
      <Body>
        <Input
          placeholder="Wht needs to be done?"
          onChangeText={value => setTitle(value)}
          onSubmitEditing={() =>
            onClick({ title, completed: false, date: new Date().toISOString() })
          }
        />
      </Body>
      <Button transparent onPress={onCancel}>
        <Icon name="trash" />
      </Button>
    </ListItem>
  );
};

export default NewToDoComponent;
