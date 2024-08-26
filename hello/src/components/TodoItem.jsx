import React from 'react';
import { useContext } from 'react';
import { TodoDispatchContext } from '../App';
import './css/TodoItem.css';

const TodoItem = ({id, content, isDone, createdDate}) => { // TodoDispatchContext를 통해 onUpdate, onDelete를 지움
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    const onChangeCheckbox = () => {
        // 체크한 todo의 id를 App에 보내줌
        onUpdate(id)
    };


    const onClickDelete = () => {
        // 삭제한 todo의 id를 App에 보내줌
        onDelete(id)
    };

    return (
        <div className='TodoItem' key={id}>
            <div className='checkbox_col'>
                <input
                    checked={isDone}
                    onChange={onChangeCheckbox}
                    type="checkbox"
                    />
            </div>
            <div className='title_col'>{content}</div>
            <div className='date_col'>{new Date(createdDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
}

export default React.memo(TodoItem); // TodoList에 사용하면 안되나 싶어도 이게 더 나음 (이유 들었는대 까먹음)