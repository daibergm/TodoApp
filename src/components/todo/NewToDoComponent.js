import React, { useState } from 'react';
import { Body, Icon, CheckBox, ListItem, Input, Button } from 'native-base';

const NewToDoComponent = ({ onClick, onCancel }) => {
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState('');
  const [createAt, setCreateAt] = useState('');

  return (
    <ListItem>
      <CheckBox checked={completed} onPress={() => setCompleted(!completed)} />
      <Body>
        <Input
          placeholder="Wht needs to be done?"
          onChangeText={value => setTitle(value)}
          onSubmitEditing={() => onClick({ title, completed })}
        />
      </Body>
      <Button transparent onPress={onCancel}>
        <Icon name="trash" />
      </Button>
    </ListItem>
  );
};

export default NewToDoComponent;
