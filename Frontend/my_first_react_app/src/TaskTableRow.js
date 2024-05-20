import React from "react";
import './CSS/TableRow.css';

export function TaskTableRow({ task, editCallback, deleteCallback }) {
    // Destructure task object
    const { taskName, taskDescription, taskDate, taskStatus } = task;

    return (
        <tr>
            {/* Display task details in table cells */}
            <td>{taskName}</td>
            <td>{taskDescription}</td>
            <td>{new Date(taskDate).toLocaleDateString()}</td>
            <td>{taskStatus}</td>
            <td>
                {/* Edit and delete buttons */}
                <button className="btn btn-primary" onClick={() => editCallback(task)} id="taskEdit">
                    Edit
                </button>
                <button className="btn btn-danger" onClick={() => deleteCallback(task)} >
                    Delete
                </button>
            </td>
        </tr>
    );
}
