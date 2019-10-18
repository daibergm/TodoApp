import React from 'react';
import { Body, Icon, CheckBox, ListItem, Input, Button } from 'native-base';

const NewToDoComponent = () => {
  const completed = false;

  return (
    <ListItem>
      <CheckBox
        checked={completed}
        onPress={() => console.log('Set toDo as completed')}
      />
      <Body>
        <Input
          placeholder="Wht needs to be done?"
          onChangeText={value => console.log(value)}
          onSubmitEditing={() => console.log('Text Submit')}
        />
      </Body>
      <Button transparent onPress={() => console.log('Put toDo in trash')}>
        <Icon name="trash" />
      </Button>
    </ListItem>
  );
};

export default NewToDoComponent;
