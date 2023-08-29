import { useState, useContext } from 'react';
import css from './AddTask.module.css';
import { Button } from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { listContext, listContextData } from '../List/List';
import { boardContext } from '../../context/Context';
import { TaskList } from '../../pages/index'

function AddTask({ setButtonClicked }: any) {
    const listData: listContextData = useContext(listContext)
    const { listTasks } = listData!;

    const data: any = useContext(boardContext);
    const { updateTasks, setTasks } = data;

	const [title, setValue] = useState('')

	const handleChange = (e:any): void => {
		setValue(e.target.value)
	}
	const handleSubmit = (e:any): void => {
		e.preventDefault()
		if (title) {
			const updatedListTasks: TaskList = {
				title: listTasks.title,
				issues: [...listTasks.issues, { id: uuidv4(), name: title, description: '' }]
			}
			setTasks(updateTasks(updatedListTasks));
		}
		setButtonClicked(false)
	}

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input type='text' className={css.input} onChange={handleChange} value={title} placeholder='New task title... '></input>
			<Button
				type={'submit'}
				btnClass={'btnSubmit'}
				disabled={false}>
				Submit
			</Button>
		</form>
	)
}

export default AddTask;