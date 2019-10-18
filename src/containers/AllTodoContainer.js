import React, { useState } from 'react';
import { Container, Header, Title, Content, Body } from 'native-base';
import { connect } from 'react-redux';

// Actions
import { addTodo, updateTodo, deleteTodo } from '../store/reducers/todoReducer';

// Components
import {
  NewToDoComponent,
  AddToDoButtonComponent,
  TodoItemComponent,
} from '../components/index';

const AllTodoContainer = props => {
  const [newToDo, setNewToDo] = useState(false);
  const {
    addTodoFunction,
    updateTodoFunction,
    deleteTodoFunction,
    showFabBtn,
    screen,
    toDos,
    title,
  } = props;

  const saveToDoData = todo => {
    setNewToDo(false);
    addTodoFunction(todo);
  };

  const renderItems = () => {
    let filteredToDos = [];

    if (screen === 'Active') {
      filteredToDos = toDos.filter(todo => !todo.completed);
    } else if (screen === 'Completed') {
      filteredToDos = toDos.filter(todo => todo.completed);
    } else {
      filteredToDos = toDos;
    }

    return filteredToDos.map((todo, index) => (
      <TodoItemComponent
        key={`${todo.title}${index}`}
        todo={todo}
        deleteTodoFunction={deleteTodoFunction}
        updateTodoFunction={updateTodoFunction}
      />
    ));
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title>{title}</Title>
        </Body>
      </Header>
      <Content>
        {renderItems()}
        {newToDo && (
          <NewToDoComponent
            onClick={saveToDoData}
            onCancel={() => setNewToDo(false)}
          />
        )}
      </Content>
      {!newToDo && showFabBtn && (
        <AddToDoButtonComponent onClick={() => setNewToDo(true)} />
      )}
    </Container>
  );
};

function mapStateToProps(state) {
  const { toDos } = state.todoReducer;
  return {
    toDos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodoFunction: todo => dispatch(addTodo(todo)),
    updateTodoFunction: todo => dispatch(updateTodo(todo)),
    deleteTodoFunction: todo => dispatch(deleteTodo(todo)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllTodoContainer);
