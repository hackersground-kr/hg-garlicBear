import { useState, useRef, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';
import TodoItem from './TodoItem';
import './css/TodoList.css';

const TodoList = () => { // onUpdate, onDelete는 Item에 전달해주기 위해 적었던 것임. App에서 useContext를 이용하여 item애 바로 공유하게 되었기 때문에 지워줌
    const [search, setSearch] = useState('');
    const todo = useContext(TodoStateContext) // { TodoStateContext }로 todo를 공유받고 위의 {todo}를 지움
 
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    };

    const getSearchResult = () => {
        // 삼항연산자
        return search === '' ? todo : todo.filter((i) => i.content.toLowerCase().includes(search.toLowerCase()) /* callback 함수, search범위includes(search내용) - search의 내용에 해당하는 것을 걸러 todo를 새로 만들어줌 */)
    };

    const analyzeApp = useMemo(() => { // useMemo를 이용하여 todo에 변동값이 있으면 실행하고, 아니면 메모 해놓은 것을 그냥 보여줌(검색할 때마다 실행하던 것을 보다 더 효율적으로 바꿔줌)
        console.log('analyzeApp')
        const totalCount = todo.length;
        const doneCount = todo.filter((i) => i.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return { // return문 오브젝트를 반환
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todo])

    const {totalCount, doneCount, notDoneCount} = analyzeApp; // analyzeApp()이 useMemo가 없을 때에는 함수였음

    return (
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <div>
                <div>총개수 : {totalCount}</div>
                <div>완료 : {doneCount}</div>
                <div>미완료 : {notDoneCount}</div>
            </div>
            <input className='searchbar' placeholder='검색어를 입력하세요' 
                value={search}
                onChange={onChangeSearch}
                />
            <div className='list_wrapper'>
                {getSearchResult().map((i) => (
                    <TodoItem
                        key={i.id}
                        {...i}
                        // onUpdate={onUpdate} 위의 onUpdate, onDelete를 지웠기 때문에 필요 없음
                        // onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

TodoList.defaultProps = { // todo가 TodoStaeContext로 공유되었는데, 이 state인 todo를 props로 받지 않게 하기 위해 적음(dispatch에서는 state인 todo의 안의 요소를 공유하는 것이기 때문에 해당되지 않음)
    todo: []
}

export default TodoList;