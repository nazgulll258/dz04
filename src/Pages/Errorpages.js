import React from 'react'

const Errorpages = ({user}) => {
  return (
    <div>
      <h1>вам нельзя зайти {user.name},{user.postname}</h1>
    </div>
  )
}

export default Errorpages
