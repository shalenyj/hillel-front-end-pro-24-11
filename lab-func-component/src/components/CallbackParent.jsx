import { useCallback, useState } from "react"
import Button from "./Button";

export default function CallbackParent() {
 const [value, setValue] = useState(1);
 const [dummy, setDummy] = useState(0);

 const handleClick = () => console.log('do render when button clicked');
 // const handleClick = useCallback(() => {
 //   console.log('do render when button clicked');
 // }, []);

 return (
   <div>
     <p onClick={() => setValue(value+1)}>value: {value}</p>
     <p onClick={() => setDummy(dummy+1)}>dummy: {dummy}</p>
     <Button onClick={handleClick} />
   </div>
 )
}

