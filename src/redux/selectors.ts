import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const todoListSelector = (state: RootState) => state.todoList;
export const processListSelector = (state: RootState) => state.processList;
export const doneListSelector = (state: RootState) => state.doneList;

export const filterTypeSelector = (state: RootState) => state.filter.type;
export const filterSearchSelector = (state: RootState) => state.filter.search;
export const filterProjectSelector = (state: RootState) => state.filter.project;
export const filterGroupnameSelector = (state: RootState) => state.filter.groupname;
export const filterPrioritySelector = (state: RootState) => state.filter.priority;
export const filterDeadlineDateSelector = (state: RootState) => state.filter.deadlineDate;
export const filterDeadlineAsDeSelector = (state: RootState) => state.filter.deadlineAsDe;

export const filterListSelector = createSelector(
    todoListSelector,
    processListSelector,
    doneListSelector,
    filterTypeSelector,
    filterSearchSelector,
    filterProjectSelector,
    filterGroupnameSelector,
    filterPrioritySelector,
    filterDeadlineDateSelector,
    filterDeadlineAsDeSelector,
    (
        todoList,
        processList,
        doneList,
        type,
        searchValue,
        project,
        groupname,
        priority,
        deadlineDate,
        deadlineAsDe,
    ) => {
        const list = todoList.concat(processList).concat(doneList);
        if (deadlineAsDe === 'desc') {
            list.sort((a, b) => new Date(b.deadline).getTime() - new Date(a.deadline).getTime());
        }
        if (deadlineAsDe === 'asc') {
            list.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
        }
        return list.filter((job) => {
            if (
                job.task.includes(searchValue) &&
                job.project.includes(project) &&
                job.groupname.includes(groupname) &&
                (deadlineDate !== '' ? job.deadline <= deadlineDate : true)
            ) {
                if (type === 'ALL') {
                    return priority === 'not'
                        ? job
                        : priority === 'true'
                        ? job.priority === true
                        : job.priority === false;
                }
                return (
                    job.type === type &&
                    (priority === 'not'
                        ? job
                        : priority === 'true'
                        ? job.priority === true
                        : job.priority === false)
                );
            }
        });
    },
);