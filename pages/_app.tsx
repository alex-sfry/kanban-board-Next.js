// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../index.css'
import TasksContextProvider from '@/context/Context';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <TasksContextProvider>
            <Component {...pageProps} />
        </TasksContextProvider>
        
    )


}
