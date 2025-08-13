import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


import { Container, TodoList, Input, Button, ListItem, Trash, Check } from './styles.js';

function App() {

  const [list, setList] = useState([
    { id: uuid(), task: 'DANIEL MACHADO', finished: true },
  ]);
  const [task, setTask] = useState('');


  function inputMudou(event) {

    setTask(event.target.value)

  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task, inputTask, finished: false }]);
  }


  function finalizarTarefa(id) {

    const newList = list.map(item => [
      item.id === id ? { ...item, finished: true } : item
    ]);

    setList(newList);

  }

  function deletarTarefa(id) {
    const newList = list.filter(item => item.id !==  id);
    setList(newList);
  }

  return (
    <Container>
      <TodoList>
        <Input onChange={inputMudou} placeholder="oque tenha que fazer com o projeto"></Input>
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <u>
          {
            list.map(item => (
              <li key={item.id}>
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              </li>
            ))

          }
        </u>

      </TodoList>
    </Container>
  )
}


export default App
