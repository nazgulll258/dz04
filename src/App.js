import React, { useEffect, useState } from 'react'
import Mainpages from './Pages/Mainpages'
import Errorpages from './Pages/Errorpages'

const App = () => {
  const [name,setName] = useState("")
  const [postname,setPostname] = useState("")

  useEffect(() => {
    const Name = prompt("введите ваше имя")

setName(Name)    
     const PostName = prompt("введите вашу фамилию")
setPostname(PostName)

  },[])

  const user = {
    name:name,
    postname:postname

  }
  return (
    <div>
      {name === "timur" && postname  === "timurov"  ? (
        <Mainpages user={user} />
      ):(
        <Errorpages user={user}/>
      )}
    </div>
  )
}

export default App
