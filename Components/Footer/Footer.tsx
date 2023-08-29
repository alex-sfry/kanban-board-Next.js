import { useContext } from 'react';
import css from './Footer.module.css';
import { LIST_TYPES } from '../../config';
import { TaskList, TaskListUndef } from '../../pages/index';
import { boardContext, globalContextData } from '../../context/Context';

const Footer = () => {
    const data: globalContextData = useContext(boardContext);
    const { tasks } = data!;

    const backlogTaskList: TaskListUndef = tasks.find((list: TaskList) => list.title === LIST_TYPES.BACKLOG);
    const finishedTaskList: TaskListUndef = tasks.find((list: TaskList) => list.title === LIST_TYPES.FINISHED);

	const backlogCount: number = backlogTaskList!.issues.length
	const finishedCount: number = finishedTaskList!.issues.length

	return (
		<footer className={css.footer}>
			<div className={css.container}>
				<div className={css.counter}>
					<p>Active tasks: {backlogCount}</p>
					<p>Finished tasks: {finishedCount}</p>
				</div>
				<p>Kanban board by AlexT, 2023</p>
			</div>
		</footer>
	)
}

export default Footer;