import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FcEmptyTrash, FcCheckmark} from "react-icons/fc";
import { Container, TodoList, Input, Button} from './styles.js';

function App() {

  const [list, setList] = useState([{ id: uuid(), task: 'DANIEL MACHADO' }]);
  const [task, setTask] = ('');


  // "comprar abacate", "levar  o Nico para passear", "daniel ribeiro machado", "comprar abacate", "levar  o Nico para passear", "daniel ribeiro machado"
  function inputMudou(event) {

    setTask(event.target.value)
    //console.log(event.target.value)
    //setList([{ id: uuid(), task: event.target.value }]);


  }

  function cliqueiNoBotao() {
    setList([{ id: uuid(), task }]);
  }
  return (
    <Container>
      <TodoList>
        <Input onChange={inputMudou} placeholder="oque tenha que fazer com o projeto"></Input>
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <u>
          {
            list.map(item => (
              <li key={item.id}>{item.task}</li>
            ))

          }
        </u>

      </TodoList>
    </Container>
  )
}


export default App
