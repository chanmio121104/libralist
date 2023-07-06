import { useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newTodo.trim()) return
    setTodos([...todos, { id: Date.now(), text: newTodo.trim() }])
    setNewTodo('')
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='flex flex-col'>
      <a className='bg-emerald-300 text-white'>タスク管理</a>
      <a>タスク追加</a>
      <form onSubmit={handleSubmit} className="flex justify-around">
        <input 
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className = "w-96 shadow rounded "
        />
        <button className = "w-20 bg-emerald-300 text-white shadow rounded"　>追加</button>
      </form>

      <ul className='flex flex-col-reverse'>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-around">
            <a className = "w-96 shadow rounded">
            {todo.text}
            </a>
            <button onClick={() => handleDelete(todo.id)} className = "w-5 shadow rounded"> - </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

// import Head from 'next/head';
// import { useState } from 'react';

// export default function Textchange() {
// const [text, setText] = useState("aaaaa");

//   const textwrite = () => {
//     setText(text);
//     console.log(text);
//   }

//   return (
//     <>
//       <Head>
//         <title>タスクサイト</title>
//       </Head>
//         <input
//           type="text"
//           value={text}
          
//         />
//       {/* <button onClick={textwrite}>
//           +
//       </button> */}
//       <a>
//         {text}
//       </a>
//     </>
//   );
// }



// import Head from 'next/head';
// import { useState } from 'react';

// export default function Textchange() {
// const [text, setText] = useState(0);

//   const textwrite = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <>

//       <Head>
//         <title>タスクサイト</title>
//       </Head>
//         <input
//         type="text"
//         value={text}
//         onChange={textwrite}
//         />
//       <p>
//         input : {text}
//       </p>
//       {/* <button onClick={textwrite}>
//           +
//       </button> */}
//     </>
//   );
// }