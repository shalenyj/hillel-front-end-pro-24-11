import { useEffect, useRef, useState } from 'react';

export default function SignIn() {
 const [login, setLogin] = useState('');
 const element = useRef('');

 useEffect(() => {
   console.log(element.current);
 });

 return (
   <div>
     <input ref={element} type="text" value={login} onChange={(e) => setLogin(e.target.value)}  />
   </div>
 )
}