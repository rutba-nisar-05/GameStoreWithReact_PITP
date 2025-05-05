import React from 'react'

function socialListItem({item}) {
  return (
    <li>
        <a href="#">
            <i className={item._id===4 ? `share ${item.icon}` : item.icon}></i>
        </a>
    </li>
  )
}

export default socialListItem