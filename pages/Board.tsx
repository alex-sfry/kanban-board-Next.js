import { useContext } from "react"
import css from './Board.module.css'
import { LIST_TYPES, LIST_TITLES } from '../config'
import List from '../Components/List'
import { TaskList, TaskListUndef } from './index'
import { boardContext, globalContextData } from '../context/Context'

const Board = () => {
    const data: globalContextData = useContext(boardContext);

    const { tasks } = data!;

    return (
        <div className={css.board}>
            {Object.values(LIST_TYPES).map((type: string) => {
                const currListIndex: number = tasks.findIndex((item: TaskList) => item.title === type)
                const listTasks: TaskListUndef = tasks.find((item: TaskList) => item.title === type);

                // if (!listTasks) throw new TypeError('The value was promised to always be there!');

                return (
                    <List
                        key={type}
                        title={LIST_TITLES[type]}
                        listTasks={listTasks!}
                        //if localstorage is empty prevListTasks is the same as listTasks --> both are empty
                        prevListTasks={tasks[currListIndex - 1] || tasks[currListIndex]}
                    />
                )
            })}
        </div>       
    )
}

export default Board;