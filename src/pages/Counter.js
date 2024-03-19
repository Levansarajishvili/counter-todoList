import { useState } from 'react';

export default function Counter() {

  // counterapp 
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  };
  // endofcounterapp 

  // todolist 
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // const task = {
    //   id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    //   taskName: newTask,
    //   completed: false,
    // };
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task !== taskName;

      // if (task === taskName) {
      //   return false;
      // } else {
      //   return true;
      // }
    });

    setTodoList(newTodoList);
  };

  // const completeTask = (id) => {
  //   setTodoList(
  //     todoList.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, completed: true };
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };
  // endoftodolist 
  return (
    <div className="countapp">
      <div className='countappbox'>
        {count}

        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={setToZero}>Set to zero</button>
      </div>

      <div className='addtodotaskbox'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
        <div className='list'>
          {todoList.map((task) => {
            return <div className='listoftask'>
              <h1>{task}</h1>
              {/* <button>Complete</button> */}
              <button onClick={() => deleteTask(task)}> X </button>
            </div>
          })}
        </div>
      </div>



    </div>


  );
}

//  rfc




