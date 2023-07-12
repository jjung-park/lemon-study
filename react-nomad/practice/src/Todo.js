import {useState} from 'react';

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onchange = (event) => setTodo(event.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(todo === ''){
      return;
    }
    //수정하는 함수를 사용할 때 두가지 옵션
    setTodo(''); //1. string을 보내는 방법
    setTodos((currentArray) => [todo, ...currentArray]); //새로운 array를 받아야함 //2. 함수를 보내는 방법 / 첫번째 인자로 현재의 state를 보낸다
  }

  return (
      <div>
        <h1>My todos ({todos.length})</h1>
        <form>
          <input type="text" placeholder="to do " value={todo} onChange={onchange}/>
          <button onClick={onSubmit}>add To do </button>
        </form>
        <hr/>
          <ul>
              {todos.map((item, index) => <li key={index}>{item}</li>)} {/*key값이 없으면 에러 남 : map 사용방법..오 이런 방법이..*/}
          </ul>
      </div>
  );
}

export default Todo;
