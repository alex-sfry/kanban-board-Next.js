import css from './LinkButton.module.css';
import Link from 'next/link';

interface LinkButtonProps {
    children: any, 
    route: string,
    variant: string,
}

interface Variants {    
    crossLarge: string
    
}

const LinkButton = ({ children, route, variant }: LinkButtonProps) => {
    const variants: Variants = {
        crossLarge: `${css.btn} ${css.crossLarge}`
    }
    

	return (
        <div className={variants.crossLarge} >                       
            <Link href={route} >{children}</Link>
        </div>
		
	)
}

export default LinkButton