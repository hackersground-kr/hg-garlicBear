import React from 'react';
import { useReducer, useState, useRef, useCallback, useMemo } from 'react';
import './App.css';
import Header from './components/Header'
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
// import TestComp from './components/TestComp';

// 얘는 직접 todo를 새로 재구성하여 만들기 때문에 useCallback을 사용하지 않음
const reducer = (state, action) => { // action이 변경되었을 때의 경우를 실행시켜주기 위한 목록
  switch (action.type) {
    case "CREATE": {
      return [action.newTodo, ...state];
    }
    case "UPDATE": {
      return state.map((i) => i.id === action.targetId ? {...i, isDone : !i.isDone} : i);
    }
    case "DELETE": {
      return state.filter((i) => i.id !== action.targetId);
    }
    default:
      return state
  }
}

// 할 일 저장 배열에 저장할 초기값 만들기
const mockTodo = [
  {
    id: 0, // 값이 추가된 순서
    isDone: false, // 완료 유무
    content: '빨래하기', // 할 일 내용
    createdDate: new Date().getTime(), // 임력한 날짜
  },
  {
    id: 1,
    isDone: false,
    content: '빨래건조',
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '빨래정리하기',
    createdDate: new Date().getTime(),
  },
];

export const TodoStateContext = React.createContext(); // 다른 컨포넌트에서 가져다 쓸 수 있도록 export해줌
export const TodoDispatchContext = React.createContext();

const App = () => {
  // // 할 일을 저장할 상태변수 todo를 만들고, 초기값으로 mockTodo에 할당
  // const [todo, setTodo] = useState(mockTodo);

  // 이건 뭐지
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  // 추가될 할 일의 id 초기값을 지정해 주기(앞에 배열에 이미 초기값으로 2번까지 있기 때문에 3부터임) : 전역변수와 같은 역할
  const idRef = useRef(3); 

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newTodo: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime()
      },
    })

    // const newTodo = {
    //   id: idRef.current,
    //   isDone: false,
    //   content, // 이름이 같으면 굳이 두 번 적지 않아도 됨 오히려 두 번 적으련 이상하게 인식 됨
    //   createdDate: new Date().getTime()
    // };
    // setTodo([newTodo, ...todo])
    idRef.current += 1
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId, // 얘는 직접 todo를 만들지 않고 위 reducer에 값을 전달만 해주기 때문에 useCallback을 사용함 
    });

  //   // map을 이용하여 하난식 대조했을 때 해당하는 배열의 id가 targetId와 같으면 무조건 반대로 바꿔줌, 아니면 유지
  //   // item의 checkbox에 onChane가 발생하면 해당 id의 값을 targetId로 넘겨줌
  //   setTodo(
  //     todo.map((i) => i.id === targetId ? {...i, isDone : !i.isDone} : i)
  //   );
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch ({
      type: 'DELETE',
      targetId,
    });

    // // 삭제한 것의 id와 일치하지 않는 것만 해당시켜 표시
    // setTodo(
    //   todo.filter((i) => i.id !== targetId)
    // );
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete } // 함수의 직접적인 변동사항이 없으면 호출하지 말라고 적은 것임
  }, [onUpdate, onDelete]); // onCreate는 callback이 없기 떄문에 변화를 감지하는 배열에 적지 않아야 함 (왜인지는 진짜 모름..)

  return (
    <div className="App">
      <TodoStateContext.Provider value={todo}>{/* TodoStateContext.Provider로 todo={todo}를 제공하기 때문에 지워줌 */}
        <TodoDispatchContext.Provider value={memoizedDispatches}>{/* onUpdate={onUpdate} onDelete={onDelete} onCreate={onCreat}를 지워줌 */}
          {/* <TestComp /> */}
          <Header />
          <TodoEditor />
          <TodoList /> {/* TodoItem은 Todo List 안에 있음 */}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
};

export default App;
