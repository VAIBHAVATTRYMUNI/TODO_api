import React, { useContext } from "react";
import { TStore } from "../api/TodoStore";

const DisplayTodo = () => {
  const { todos, handleDelete, handleUpdate } = useContext(TStore);

  return (
    <section className="bg-[url('src/assets/1.jpg')]  w-[2000px] bg-repeat bg-contain h-[480px]">
    <section className="shadow-sky-200 p-[2vw] mt-[2vw] border-[1px] rounded-lg  w-[2000px]">
      <article className="flex gap-3 ">
        {todos.map(value => {
          return (
            <div 
              className="animate-[ping_1500ms_ease-in-out_reverse]  bg-transparent border-[3px] rounded-lg  sm:text-[7vw] text-black lg:text-[6vw] xl:text-[2vw] border-transparent   flex flex-col
              gap-7 shadow-sky-200 p-[2vw] hover:bg-black hover:text-sky-500 hover:border-sky-500 " 
              key={value.id}
            >
              <div className="animate-[pulse_1500ms_ease-in-out_infinite]">
                <h1>Title : {value.title}</h1>
                <h2>Description : {value.description}</h2>
                <h2>Todo Id : {value.id}</h2>
              </div>
              <div className="flex justify-between hover:bg-black ">
                <button
                  className="border-2 border-sky-500 rounded-md hover:bg-sky-500 hover:animate-[spin_3000ms_ease-in-out_normal] hover:border-sky-500"
                  onClick={() => handleDelete(value.id)}
                  
                >
                  ❌
                </button>
                {/* <button
                  className="border-2 border-red-600 rounded-md p-[0.3vw]  hover:bg-red-200 active:bg-green-500 text-white...}"
                  onClick={() => handleSave(value.id) 
                    }
                >
                  Done
                </button> */}

                <button
                  className="border-2 border-sky-500 rounded-md hover:bg-sky-500 hover:animate-[ping_500ms_ease-in-out_reverse] hover:border-sky-500"
                  onClick={() => handleUpdate(value.id)}
                >
                  ✏️
                </button>
              </div>
              <div>
                <h3>Created on :{value.data}</h3>
              </div>
            </div>
          );
        })}
      </article>
    </section>
    </section>
  );
};

export default DisplayTodo;