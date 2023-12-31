import Head from 'next/head'
import { Inter } from 'next/font/google'
import Board from './Board'
import css from './index.module.css'
import Layout from '@/Components/Layout'

export type IssueUndef = Issue | undefined;
export type TaskListUndef = TaskList | undefined;

export interface Issue {
    id: string | number,
    name: string,
    description: string
}

export interface TaskList {
    title: string,
    issues: Issue[]
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className={css.container}>
                    <Board />
                </div>               
            </Layout>
            
        </>
    )
}
