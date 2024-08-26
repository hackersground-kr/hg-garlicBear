import { useState, useRef, useContext } from 'react';
import { TodoDispatchContext } from '../App';
import './css/TodoEditor.css'

const TodoEditor = () => { // useContext를 통해 {onCreate}를 import 해 올 이유가 사라짐
    const {onCreate} = useContext(TodoDispatchContext) // TodoDispatchContext를 가져옴

    const [content, setContent] = useState();
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value)
    };

    const onSubmit = () => {
        if (!content) { // 할 일 내용이 없으면 input창에 포커스
            inputRef.current.focus(); // input이라 focus 메서드가 사용가능
            return;
        }
        onCreate(content);
        setContent('') // onCreate(content)를 사용하여 값을 추가한 후 setContent의 상태(값)을 비워줌
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✑</h4>
            <div className="editor_wrapper">
                <input placeholder='새로운 Todo...' 
                    ref = {inputRef} // 위의 useRef()가 가르키는 것이 무엇인지 지정해줌
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;