export default function ReRender(props) {

 console.log('re-rendered')

 return (
   <div>
     <p>
       Counter: {props.counter}
     </p>
     <button type="button" onClick={props.clickHandler}>Increase</button>
   </div>
 )
}

