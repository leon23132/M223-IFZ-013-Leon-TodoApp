import React, { useState } from "react";
import './CSS/TaskEditor.css';
import { TaskTableRow } from "./TaskTableRow";

export function TaskTable({ tasklist, editCallback, deleteCallback, selectorChanged }) {
    // Function to handle date filter change
    const handleDateChange = (event) => {
        const selectedValue = event.target.value;
        const updated = { ...tasklist, filterDate: selectedValue };
        selectorChanged(updated);
    };

    // Function to handle status filter change
    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        const updated = { ...tasklist, taskStatus: selectedValue };
        selectorChanged(updated);
    };

    return (
        <table className="table table-sm table-striped table-bordered">
            <thead>
                <tr>
                    {/* Table header */}
                    <th colSpan="6" className="bg-primary text-white text-center h4 p-2">
                        Task
                    </th>
                </tr>
                <tr>
                    {/* Table column headers */}
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date <br />
                        {/* Dropdown for date sorting */}
                        <select id="sortOrder" name="DateStatus" onChange={handleDateChange}>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </th>
                    <th>Status <br />
                        {/* Dropdown for status filtering */}
                        <select className={`form-control-edit`} name="taskStatus" onChange={handleFilterChange}>
                            <option value="all">Alle</option>
                            <option value="In Bearbeitung">In Bearbeitung</option>
                            <option value="Abgeschlossen">Abgeschlossen</option>
                            <option value="Verspätet">Verspätet</option>
                        </select>
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Render table rows for each task */}
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
