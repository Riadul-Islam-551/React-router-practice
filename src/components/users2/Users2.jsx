import React, { use } from 'react'

const Users2 = ({userPromis}) => {

const users = use(userPromis)
console.log('The users Data is',users)

  return (
    <div>
      <h3>This is users 2</h3>
    </div>
  )
}

export default Users2
