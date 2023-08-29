import { ComponentType } from 'react';
import css from './withCloseCross.module.css';

const withCloseCross = (Component: ComponentType<any>) => {
	const newComponent = (): JSX.Element => {
		return <Component>
			<span className={css.close}></span><span className={css.close}></span>
		</Component>
	}
	return newComponent;
}

export default withCloseCross;