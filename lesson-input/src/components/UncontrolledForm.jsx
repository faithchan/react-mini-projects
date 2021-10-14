import {useRef, useState} from 'react'

export default function UncontrolledForm(){
    const [login,setLogin]=useState({email:'',password:''})
  const inputEmailRef=useRef();
  const inputPasswordRef=useRef();


  const handleSubmit=()=>{
    console.log('email value - ', inputEmailRef.current.value)
    console.log('password value - ', inputPasswordRef.current.value)
    setLogin({
        email:inputEmailRef.current.value,
        password:inputPasswordRef.current.value
      })
    console.log('make api call')
  }
  return(
    <div>
        <h1>Uncontrolled Form</h1>
      <input type='text' ref={inputEmailRef}/>
      <input type='password' ref={inputPasswordRef}/>
      <input type='submit' onClick={handleSubmit}/>
    </div>
  )
}               