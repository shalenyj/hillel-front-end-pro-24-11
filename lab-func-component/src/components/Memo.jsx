import { useMemo, useState } from 'react';

const calculate = (value) => {
 let result = 0;
 do {
   result++;
 } while(result < 1000000000);

 return value * 100;
}

export default function Calculator() {
 const [value, setValue] = useState(2);
 const [dummy, setDummy] = useState(0);

 // const complexValue = calculate(value);
//  const complexValue = useMemo(() => {
//    return calculate(value);
//  }, [value]);

 const handleUpdateValue = () => {
   setValue(prev => prev + 1);
 }

 const doNothing = () => {
   setDummy(dummy + 1);
 }
  return (
   <div>
     <p>Value: {complexValue}</p>
     <button type="button" onClick={handleUpdateValue}>Update value</button>
     <button type="button" onClick={doNothing}>Do nothing ({dummy})...</button>
   </div>
 )
}

