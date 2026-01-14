import React, { useState} from 'react'

const App = () => {

  const [A, setA] = useState(10)
  const [username, setusername] = useState("Fawah")
//for objects 
  const [obj, setobj] = useState({user: "Sarthak" , age:20})
  function buttonclk(){
    setA(20)
    setusername("Fawah khan")
  }
  function changeobj(){
     //siimple jese objects ko access krte hai wese hi krenge
    const newObj = {...obj} ; //obj ki copy bnaai
    newObj.user = "Aman" ;
    setobj(newObj)
  }
  const [title, settitle] = useState("")

  const formsubmit = (e)=>{
    e.preventDefault()
    console.log("enetered character is" , title)
  }
  
  return (
    <div>


      <h1>Value of a is {A} <br /> Value of user is {username}</h1>
      <button onClick={buttonclk}>Click here to change value of a</button>
      <h1>Value of User is {obj.user} , {obj.age}</h1>
      <button onClick={changeobj}>Click here to change value of obj</button>
      <br /><br />
      <form onSubmit={(e)=>{
          formsubmit(e)
        }}>
        <input  
                type="text" 
                placeholder='Enter your Name Here' 
                value={title} 
                onChange={(e)=>{
                  settitle(e.target.value)
                }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
