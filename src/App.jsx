import { useState } from "react";

export default function App() {
  const [count,setCount] =useState(0);

  const handleIncrease =()=> {
    setCount (count+1);
  };

  const handleDecrease=() => {
    setCount (count-1);
  }

  return(
    <>
    <button onClick={handleIncrease}>increase</button>
    <button onClick={handleDecrease}>decrease </button>
    <h2>current count is {count}</h2>


    </>
  );

}

// export default function App() {
//   const [value, setValue] = useState("");
//   const [items, setItems] = useState([]);

//   const handleInputChange = (event) => {
//     setValue(event.target.value);
//   }

//   const handleSaveItem = () => {
//     if (value === "") {
//       alert("Value must not be empty!");
//     } else {
//       console.log("User wants to save ----->", value);
//       const newItems = [...items, value];
//       setItems(newItems);
//       setValue("");
//     }
//   };
//   const handleDeleteItem=(indexToDelete)=>{
//     const newArr=items.filter((_, index)=> index !==indexToDelete);
//     setItems(newArr);
//   }

//   return (
//     <>
//       <input 
//         type="text" 
//         placeholder="Enter text"
//         value={value} 
//         onChange={handleInputChange} 
//       />
//       <button onClick={handleSaveItem}>Save</button>
//       <ul>
//         {items.map((item,index) => {
//         return(
//           <li className={()}>
//             {item}
//             <button onClick={() => handleDeleteItem(item)}>delete</button>
//           </li>
//         );
//         })}
//      </ul>
//     </>
//   );
// }























// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="container">
//       <div className="button-group">
//         <button onClick={() => setCount(count + 1)}>Increase</button>
//         <button onClick={() => setCount(count - 1)}>Decrease</button>
//       </div>
//       <h1>Count is {count}</h1>
//     </div>
//   );
// }

// export default App;
