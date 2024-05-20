import { useEffect, useState } from "react";
import { TaskTable } from "./TaskTable";
import { TaskEditor } from "./TaskEditor";
import { deleteData, getData, postData, putData } from './Reqeusts';

export function TaskDisplay() {
    // State variables for task list, selected task, and selector state
    const [tasklist, setTaskList] = useState([]);
    const [task, setTask] = useState(null);
    const [selState, setSelState] = useState({ taskStatus: "", filterDate: "asc" });

    // Function to fetch data from the server
    const fetchData = async (url, setter) => {
        try {
            const data = await getData(url);
            if (data) {
                setter(data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Fetch task list data when component mounts
    useEffect(() => {
        fetchData("http://localhost:8080/tasks/all", setTaskList);
    }, []);

    // Function to handle selector change
    const selectorChanged = async (updated) => {
        const { taskStatus, filterDate } = updated;

        // Check if taskStatus is provided, otherwise use the previous status
        const statusToUse = taskStatus || selState.taskStatus;
        // Check if filterDate is provided, otherwise use the previous filter
        const dateToUse = filterDate || selState.filterDate;

        try {
            const data = await getData(`http://localhost:8080/tasks/filteredDate/${statusToUse},${dateToUse}`);
            if (data) {
                setTaskList(data);
            }
        } catch (error) {
            console.error("Error fetching filtered data:", error);
        }

        // Update the status and filter
        setSelState({ taskStatus: statusToUse, filterDate: dateToUse });
    };

    // Callback function to cancel editing
    const cancelCallback = () => setTask(null);

    // Callback function to delete a task
    const deleteCallback = async (task) => {
        try {
            await deleteData(`http://localhost:8080/tasks/delete/${task.taskid}`);
            fetchData("http://localhost:8080/tasks/all", setTaskList);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // Callback function to edit a task
    const editCallback = (task) => setTask(task);

    // Callback function to save a task
    const saveCallback = async (taskData) => {
        try {
            const requestData = {
                taskName: taskData.taskName,
                taskDescription: taskData.taskDescription,
                taskDate: taskData.taskDate,
                taskStatus: taskData.taskStatus
            };

            if (taskData.taskid) {
                await putData(`http://localhost:8080/tasks/update/${taskData.taskid}`, requestData);
            } else {
                await postData(`http://localhost:8080/tasks/add`, requestData);
            }

            fetchData("http://localhost:8080/tasks/all", setTaskList);
            setTask(null);
        } catch (error) {
            console.error("Error saving task:", error);
        }
    };

    // Callback function to create a new task
    const createCallback = () => setTask({
        taskid: null,
        taskName: "",
        taskDescription: "",
        taskDate: Date.now(),
        taskStatus: ""
    });

    return (
        <div className="m-2">
            {task ? (
                // Render task editor if a task is selected for editing
                <TaskEditor
                    task={task}
                    saveCallback={saveCallback}
                    cancelCallback={cancelCallback}
                />
            ) : (
                <div>
                    {/* Render task table if no task is selected for editing */}
                    <TaskTable
                        tasklist={tasklist}
                        editCallback={editCallback}
                        deleteCallback={deleteCallback}
                        onDateChange={selectorChanged}
                        selectorChanged={selectorChanged}
                    />
                    {/* Button to create a new task */}
                    <div className="text-center">
                        <button className="btn btn-primary m-1" onClick={createCallback} id="NewTask">
                            New Task
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
