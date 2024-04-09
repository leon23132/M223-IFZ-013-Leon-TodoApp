import React, { useState } from "react";
import './CSS/TaskEditor.css';

export function TaskEditor({ task, saveCallback, cancelCallback }) {
    const [formData, setFormData] = useState({
        taskName: task.taskName,
        taskDescription: task.taskDescription,
        taskDate: new Date(task.taskDate).toISOString().substring(0, 10),
        taskStatus: task.taskStatus
    });

    const [nameError, setNameError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [statusError, setStatusError] = useState(false);

    const handleSave = (ev) => {
        // Überprüfen, ob alle erforderlichen Felder ausgefüllt sind
        if (formData.taskName && formData.taskDescription && formData.taskDate && formData.taskStatus) {
            const newTask = {
                ...task,
                taskName: formData.taskName,
                taskDescription: formData.taskDescription,
                taskDate: new Date(formData.taskDate).getTime(),
                taskStatus: formData.taskStatus
            };
            saveCallback(newTask);
        } else {
            if (!formData.taskName) setNameError(true);
            if (!formData.taskDescription) setDescriptionError(true);
            if (!formData.taskDate) setDateError(true);
            if (!formData.taskStatus) setStatusError(true);
        }
    };

    const selectorChanged = (ev) => {
        const newFormData = { ...formData };
        const { name, value } = ev.target;
        newFormData[name] = value;
        setFormData(newFormData);

        // Fehlerzustände zurücksetzen, wenn das Eingabefeld geändert wird
        if (name === "taskName") setNameError(false);
        if (name === "taskDescription") setDescriptionError(false);
        if (name === "taskDate") setDateError(false);
        if (name === "taskStatus") setStatusError(false);
    };

    return (
        <div className="m-2-edit">
            <div className="form-group-edit">
                <label>Name</label>
                <input className={`form-control-edit ${nameError ? "error" : ""}`} name="taskName"
                    value={formData.taskName}
                    onChange={selectorChanged}
                    maxLength={15}
                />
                {nameError && <span className="error-text">Bitte geben Sie einen Namen ein.</span>}
            </div>
            <div className="form-group-edit">
                <label>Beschreibung</label>
                <input className={`form-control-edit ${descriptionError ? "error" : ""}`} name="taskDescription"
                    value={formData.taskDescription}
                    onChange={selectorChanged}
                    maxLength={75}
                />
                {descriptionError && <span className="error-text">Bitte geben Sie eine Beschreibung ein.</span>}
            </div>
            <div className="form-group-edit">
                <label>Datum</label>
                <input className={`form-control-edit ${dateError ? "error" : ""}`} name="taskDate" type="date"
                    value={formData.taskDate}
                    onChange={selectorChanged}
                />
                {dateError && <span className="error-text">Bitte geben Sie ein Datum ein.</span>}
            </div>
            <div className="form-group-edit">
                <label>Status</label>
                <select className={`form-control-edit ${statusError ? "error" : ""}`} name="taskStatus"
                    value={formData.taskStatus}
                    onChange={selectorChanged}
                >
                    <option value="">Bitte wählen</option>
                    <option value="In Bearbeitung">In Bearbeitung</option>
                    <option value="Abgeschlossen">Abgeschlossen</option>
                    <option value="Verspätet">Verspätet</option>
                </select>
                {statusError && <span className="error-text">Bitte wählen Sie einen Status.</span>}
            </div>
            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={handleSave}>
                    Speichern
                </button>
                <button className="btn btn-secondary" onClick={cancelCallback}>
                    Abbrechen
                </button>
            </div>
        </div>
    );
}
