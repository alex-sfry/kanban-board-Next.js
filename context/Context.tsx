'use client'
import { useState, useEffect, createContext } from "react";
import initialState from '../emptyMock';
import { TaskList } from '../pages/index';

interface Data {
    tasks: TaskList[];
    setTasks: any;
    updateTasks: (updatedListTasks: TaskList, updatedPrevListTasks?: TaskList) => void;
}

export type globalContextData = Data | null

// global context
export const boardContext = createContext<globalContextData>(null);


const TasksContextProvider = ({ children }: any) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    let value
    if (typeof window !== "undefined") {
        if (localStorage.getItem('tasks') as string) {
            value = JSON.parse(localStorage.getItem('tasks') as string)
        } else value = initialState
    }

    const [tasks, setTasks] = useState<TaskList[]>(value)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks') as string))
    }, [])

    const updateTasks = (updatedListTasks: TaskList, updatedPrevListTasks?: TaskList): TaskList[] => {
        const updatedListIndex: number = tasks.findIndex((task: TaskList) => task.title === updatedListTasks.title)
        const updatedTasks: TaskList[] = tasks.map((item: TaskList, index: number) => {
            if (index === updatedListIndex) {
                return updatedListTasks;
            }

            if (typeof (updatedPrevListTasks) !== 'undefined') {
                if (index === updatedListIndex - 1) {
                    return updatedPrevListTasks;
                }
            }

            return item;
        })

        return updatedTasks;
    }


    const data: Data = {
        tasks: tasks,
        setTasks: setTasks,
        updateTasks: updateTasks
    }

    return (
        isClient &&
        <boardContext.Provider value={data}>
            {children}
        </boardContext.Provider>
    );

}

export default TasksContextProvider;
