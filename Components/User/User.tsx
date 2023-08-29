import { useState } from 'react';
import css from './User.module.css';
import Image from 'next/image'
import avatar from '../../Assets/user-avatar.svg';
import arrow from '../../Assets/Vector.svg';

const User = () => {
	const [isOpen, setIsOpen] = useState<Boolean>(false);

	const handleClick = (e: any): void => {
		e.preventDefault()
		setIsOpen(!isOpen);
	}

	return (
		<div className={css.user}>
			<div className={css.images} onClick={handleClick}>
				<Image src={avatar} className={css.avatar} alt='user avatar' />
				<Image src={arrow} className={isOpen ? `${css.arrow} ${css.isActive}` : `${css.arrow}`} alt='arrow' />
			</div>
			<ul className={isOpen ? `${css.userMenu} ${css.isOpen}` : `${css.userMenu}`}>
				<li className={css.menuItem}>Profile</li>
				<li className={css.menuItem}>Log Out</li>
			</ul>
		</div>
	)
}

export default User;