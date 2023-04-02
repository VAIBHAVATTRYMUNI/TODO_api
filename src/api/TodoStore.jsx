import { createContext, useState } from "react";

const TStore = createContext([
  {
    id: 1,
    title: "NO Todo",
    description: "NO Todo",
  },
]);

export { TStore };
const TodoStore = props => {
  let [todos, setTodos] = useState([
    {
      id: 1,
      title: "NO Todo",
      description: "NO Todo",
      data: new Date().toString().split(" ")[4],
    },
  ]);

  let [title0, setTitle0] = useState("");
  let [desc, setDesc] = useState("");

  let [id, setId] = useState(2);
  const handleCreate = (title, description) => {
    setId(id + 1);

    setTodos([
      ...todos,
      {
        id: id,
        title,
        description,
        data: new Date().toString().split(" ")[4],
      },
    ]);
    console.log(todos);
    title0.current.value = "";
    desc.current.value = "";
  };

  const handleUpdate = id => {
    todos.map(value => {
        if(confirm("plz enter another specific key/title.")){
      if (value.id === id) {
        title0.current.value = value.title;
        desc.current.value = value.description;
        setTodos(todos.filter(value => id !== value.id));
      }

      console.log(todos);
  }});
  };
  const handleDelete = id => {
    if (confirm("Do You want to delete?")) {
      setTodos(todos.filter(value => id !== value.id));
    }
  };
//   const handleSave = id => {
//     if (confirm("Do You want to Save?")) {
//         setTodos(todos.filter(value => id === value.id)||(value => id !==id));   
        
//     }
//   };

  return (
    <TStore.Provider
      value={{
        todos,
        handleCreate,
        handleDelete,
        // handleSave,

        handleUpdate,
        setTitle0,
        setDesc,
      }}
    >
      {props.children}
    </TStore.Provider>
  );
};

export default TodoStore;