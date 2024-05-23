import React from 'react'
import { useParams } from 'react-router-dom'

const UserView = () => {
    const {id} =useParams()
  return (
    <div>UserView of id: {id}</div>
  )
}

export default UserView