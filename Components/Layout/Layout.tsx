
import css from './Layout.module.css';
import Header from '../Header';
import Footer from '../Footer';


const List = ({ children }: any) => {
    

    return (
        <div className={css.wrapper}>
            <Header />
                <main className={css.main}>
                    { children }
                </main>
            <Footer />
        </div>

        
    )
}

export default List;
