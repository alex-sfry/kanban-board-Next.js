import css from './Button.module.css';
import withCloseCross from '../withCloseCross/withCloseCross';

interface ButtonProps {
    children: any, 
    btnClass: string,
    disabled: boolean, 
    handleClick?: () => void, 
    type: "button" | "submit" | "reset" | undefined
}

export const Button = ({ children, btnClass, disabled, handleClick, type }: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`${css.btn} ${css[btnClass]}`}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}

const ButtonCloseWindow = ({ children }: any) => {
	return (
		<button className={css.btnClose}>
			{children}
		</button>
	)
}

export const Close = withCloseCross(ButtonCloseWindow)

