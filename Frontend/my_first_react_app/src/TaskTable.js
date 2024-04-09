import React, { useState } from "react";
import './CSS/TaskEditor.css';
import { TaskTableRow } from "./TaskTableRow";

export function TaskTable({ tasklist, editCallback, deleteCallback, selectorChanged }) {



    const handleDateChange = (event) => {
        const selectedValue = event.target.value;
        const updated = { ...tasklist, filterDate: selectedValue };
        selectorChanged(updated);
    };

    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        const updated = { ...tasklist, taskStatus: selectedValue };
        selectorChanged(updated);
    };

    return (
        <table className="table table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th colSpan="6" className="bg-primary text-white text-center h4 p-2">
                        Task
                    </th>
                </tr>
                <tr>

                    <th>Name</th>
                    <th>Description</th>
                    <th>Date <br />
                        <select id="sortOrder" name="DateStatus" onChange={handleDateChange}>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </th>
                    <th>Status <br />
                        <select className={`form-control-edit`} name="taskStatus" onChange={handleFilterChange}>
                            <option value="alle">Alle</option>
                            <option value="In Bearbeitung">In Bearbeitung</option>
                            <option value="Abgeschlossen">Abgeschlossen</option>
                            <option value="Verspätet">Verspätet</option>
                        </select>
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasklist.map(task => (
                    <TaskTableRow
                        key={task.taskId}
                        task={task}
                        editCallback={editCallback}
                        deleteCallback={deleteCallback}
                    />
                ))}
            </tbody>
        </table>
    );
}
