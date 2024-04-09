import { useEffect, useState } from "react";
import { TaskTable } from "./TaskTable";
import { TaskEditor } from "./TaskEditor";
import { deleteData, getData, postData, putData } from './Reqeusts';

export function TaskDisplay() {
    const [tasklist, setTaskList] = useState([]);
    const [task, setTask] = useState(null);
    const [selState, setSelState] = useState({ taskStatus: "", filterDate: "asc" });


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

    useEffect(() => {
        fetchData("http://localhost:8080/tasks/all", setTaskList);
    }, []);


    const selectorChanged = async (updated) => {
        console.log("Changed", updated);
        const { taskStatus, filterDate } = updated;
    
        // Überprüfen, ob taskStatus angegeben ist, sonst verwenden Sie den vorherigen Status
        const statusToUse = taskStatus || selState.taskStatus;
        // Überprüfen, ob filterDate angegeben ist, sonst verwenden Sie den vorherigen Filter
        const dateToUse = filterDate || selState.filterDate;
    
        try {
            const data = await getData(`http://localhost:8080/tasks/filteredDate/${statusToUse},${dateToUse}`);
            if (data) {
                setTaskList(data);
                console.log(data);
            }
        } catch (error) {
            console.error("Error fetching filtered data:", error);
        }
    
        // Aktualisieren Sie den Status und den Filter
        setSelState({ taskStatus: statusToUse, filterDate: dateToUse });
    };
    
    

    const cancelCallback = () => setTask(null);

    const deleteCallback = async (task) => {
        try {
            await deleteData(`http://localhost:8080/tasks/delete/${task.taskid}`);
            fetchData("http://localhost:8080/tasks/all", setTaskList);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const editCallback = (task) => setTask(task);

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
                <TaskEditor
                    task={task}
                    saveCallback={saveCallback}
                    cancelCallback={cancelCallback}
                />
            ) : (
                <div>
                    <TaskTable
                        tasklist={tasklist}
                        editCallback={editCallback}
                        deleteCallback={deleteCallback}
                        onDateChange={selectorChanged}
                        selectorChanged={selectorChanged}
                    />
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
