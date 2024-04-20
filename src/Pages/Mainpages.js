import React from 'react'

const Mainpages = ({user}) => {
  return (
    <div>
      <h1>вам можно зайти на сайт {user.name}  {user.postname}</h1>
    </div>
  )
}

export default Mainpages
