
"use client"
import { useState } from "react";
export default function Page() {
const [fruit, setFruit] = useState('banana');
const changeApple = () => {
setFruit('apple');
}
return (
<div>
<h1 className="text-3xl text-center items-center"> {fruit} </h1>
<button onClick={changeApple} >Apple</button>
</div>
)
}