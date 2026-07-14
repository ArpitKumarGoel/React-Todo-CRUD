import { useState } from 'react';
import Form from './components/Form.jsx';
import Tables from './components/Tables.jsx';
function App(){
const [todos, setTodos] = useState([])
const [id, setId] = useState("")
const deleteTodos=(id)=>{
  setTodos(todos.filter((d)=>d.id != id))
}
  return(
    <>
    <div className="container">
      <h1 className="text-center">React To Do List CRUD App</h1>
      <Form  todos={todos} setTodos={setTodos} id={id} setId={setId} />
      <Tables todos={todos} deleteTodos={deleteTodos} setId={setId}/>
    </div>
    </>
  );
}
export default App;