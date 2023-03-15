import { useState } from 'react'

export default function Counter() {
 const [counter, setCounter] = useState(0);

 const handleIncrease = () => {
   setCounter(counter + 1);
 }

 const handleDecrease = () => {
   setCounter(counter - 1);
 }

 return (
   <div>
     <p>
       Counter: {counter}
     </p>
     <button type="button" onClick={handleIncrease}>Plus</button>
     <button type="button" onClick={handleDecrease}>Minus</button>
   </div>
 )
}

