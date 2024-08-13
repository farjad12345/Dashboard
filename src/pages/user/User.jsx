import React from 'react'
import { useParams } from "react-router-dom";
import "./User.css"
function User() {
    let param= useParams()



  return (
    <div className='userEdit'>
<p className='editMsg'>     You are Editing User  Number #{param.userId}
</p> 
   </div>
  )
}

export default User
