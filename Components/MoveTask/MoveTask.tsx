import { useContext } from 'react';
import css from './MoveTask.module.css';
import { TaskList, Issue, IssueUndef } from '../../pages/index';
import { listContext, listContextData } from '../List/List';
import { boardContext } from '../../context/Context';

function MoveTask({ setButtonClicked }: any) {
    const listData: listContextData = useContext(listContext)
    const { listTasks, optionList } = listData!;

    const data: any = useContext(boardContext);
    const { updateTasks, setTasks } = data;

	const handleChange = (e: any) => {
		const newTask: IssueUndef = optionList.issues.find((issue: Issue) => issue.name === e.target.value)

		const updatedListTasks: TaskList = {
			title: listTasks.title,
			issues: [...listTasks.issues, newTask!]
		}
		const updatedPrevListTasks: TaskList = {
			title: optionList.title,
			issues: [...optionList.issues].filter((issue: Issue) => issue.name !== e.target.value)
		}

		setTasks(updateTasks(updatedListTasks, updatedPrevListTasks))
		setButtonClicked(false)
	}

	return (
		<select name='select' id='select' className={css.select} onChange={handleChange}>
			<option value=''></option>
			{optionList.issues.map((issue: Issue) => {
				return <option
					key={issue.id}
					value={issue.name}
					className={css.option}>
					{issue.name}
				</option>
			})}
		</select>
	)
}

export default MoveTask;