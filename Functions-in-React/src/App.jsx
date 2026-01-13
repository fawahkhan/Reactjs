import React from 'react'

const App = () => {
  //ham chahte hai ki button ke click krne pe kuch ho 
  function btnClicked(){
    console.log('button is clicked');
  }
  function inputChanging(val){ //onChange waale function se value bheji aur isme aake receive krli
    console.log(val)
  }
  return (
    <div>
      <h1>Hello, Fawah</h1>

      <div>
        <input onChange= {function(elem){
          inputChanging(elem.target.value)
        }}
          type="text" placeholder='Enter Name: ' />
      </div>

      {/* btn clicked ko bas parse krna usko call mt krna nhi toh woh click hote hi chaljayega */}
      <button onClick={btnClicked}> CLick here</button>
    </div>
  )
}

export default App
