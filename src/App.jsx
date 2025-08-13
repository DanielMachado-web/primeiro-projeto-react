import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FcEmptyTrash, FcCheckmark} from "react-icons/fc";
import { Container, TodoList, Input, Button, ListItem} from './styles.js';

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
                  <FcCheckmark />
                  <li>{item.task}</li>
                  <FcEmptyTrash />
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
