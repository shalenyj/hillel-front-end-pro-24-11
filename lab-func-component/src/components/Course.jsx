import { useEffect, useState } from 'react';

const COURSES = {
 BASIC: 'Basic',
 PRO: 'Pro',
};

export default function Course() {
  const [course, setCourse] = useState(COURSES.BASIC);

 useEffect(() => {
   console.log('render message');
 });

 return (
   <div>
     <p>Current mode: {course}</p>
     <button type="button" onClick={() => setCourse(COURSES.BASIC)}>
       {COURSES.BASIC}
     </button>
     <button type="button" onClick={() => setCourse(COURSES.PRO)}>
       {COURSES.PRO}
     </button>
   </div>
 )
}

