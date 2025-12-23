"use client"
import { useState , useEffect } from "react";
export default function Page() {
const [count, setCount] = useState(0);
const increment = () => { setCount(count + 1); }
useEffect(() => {
document.title = `You clicked ${count} times`;
});
return (
<div>
<h1 className="text-3xl text-center items-center"> {count} </h1>
<button onClick={increment } >UP</button>
<button onClick={() => setCount(count - 1)} >DOWN</button>
</div>
)
}