import React from 'react'
import "./WidgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {newMembers} from "../../datas"
function WidgetSM() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New join Member</span>
      <ul className="widgetSmList">
      {newMembers.map((user)=> <li key={user.id}className="widgetSmListIteam">
            <img src={user.img} alt="" className='widgetsmImg' />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.username}</span>
                <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className='wigetSmBotton'> <VisibilityIcon className='widgetSmIcon'/>
            </button>
        </li>)
      }
      </ul>
    </div>
  )
}

export default WidgetSM
