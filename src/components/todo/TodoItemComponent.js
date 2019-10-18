import React from 'react';
import { ListItem, Text, CheckBox, Body, Button, Icon } from 'native-base';

const TodoItemComponent = props => {
  const { todo, deleteTodoFunction, updateTodoFunction } = props;

  return (
    <ListItem>
      <CheckBox
        checked={todo.completed}
        onPress={() =>
          updateTodoFunction({ ...todo, completed: !todo.completed })
        }
      />
      <Body>
        <Text>{todo.title}</Text>
      </Body>
      <Button transparent onPress={() => deleteTodoFunction(todo)}>
        <Icon name="trash" />
      </Button>
    </ListItem>
  );
};

export default TodoItemComponent;
