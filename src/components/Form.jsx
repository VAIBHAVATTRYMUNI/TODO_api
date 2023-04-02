import React, { useContext, useState, useRef, useEffect } from "react";
import { TStore } from "../api/TodoStore";
const Form = () => {
  let data = useContext(TStore);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  let titleRef = useRef();
  let descRef = useRef();

  useEffect(() => {
    data.setTitle0(titleRef);
    data.setDesc(descRef);
  }, []);

  return (
    <section className="animate-[ping_700ms_ease-in-out_reverse] justify-center pt-[3vw] border-[3px] rounded-lg hover:bg-black hover:border-sky-500 w-[1200px] ml-[110px] bg-[url('src/assets/2.jpg')]  bg-no-repeat bg-[length:1200px_220px]">
        <h1 className="animate-[pulse_300ms_ease-in-out_infinite]
        
        ml-[450px] text-4xl text-purple-700">Enter your Todos🤺⛷️</h1>
        <br/>
        
      <form
         className="flex justify-center mb-[30px] "
        onSubmit={e => {
          e.preventDefault();
          data.handleCreate(title, description, titleRef, descRef);
        }}
      >
        
        <input
          type="text"
          name=""
          id=""
          placeholder="Title..."
          className="border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500 hover:bg-black hover:text-sky-500"
          onChange={e => setTitle(e.target.value)}
          ref={titleRef}
        />
        <input
          type="text"
          name=""
          id=""
          className="border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500 hover:bg-black hover:text-sky-500"
          placeholder="Description..."
          onChange={e => setDescription(e.target.value)}
          ref={descRef}
        />
        <button className=" border-[3px] rounded-lg p-[0.5vw]  text-[2vw] border-sky-500 bg-sky-200  hover:bg-sky-300 hover:animate-[bounce_300ms_ease-in-out_reverse]">
          ➕
        </button>
      </form>
    </section>
  );
};

export default Form;