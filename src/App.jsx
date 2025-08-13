import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


import { Container, TodoList, Input, Button, ListItem, Trash, Check } from './styles.js';

function App() {

  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');


  function inputMudou(event) {

    setInputTask(event.target.value)

  }

  function cliqueiNoBotao() {
    if (inputTask) {

      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    }
  }


  function finalizarTarefa(id) {

    const newList = list.map(item => [
      item.id === id ? { ...item, finished: true } : item
    ]);

    setList(newList);

  }

  function deletarTarefa(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <TodoList>
        <Input onChange={inputMudou} placeholder="oque tenha que fazer com o projeto"></Input>
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há itens na lista</h3>
          )}
        </ul>

      </TodoList>
    </Container>
  )
}


export default App
