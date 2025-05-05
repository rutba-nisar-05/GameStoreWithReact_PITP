import React, {useState} from 'react'
import './sideMenu.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'
import SocialListItem from './socialListItem'
import socialListData from '../data/socialListData'


function SideMenu({active, sectionActive}) {
    const [navData, setNavData] = useState(navListData)

    const handleNavOnClick=(id, target)=>{
        const newNavData = navData.map(nav=>{
            nav.active=false;
            if(nav._id===id){
                nav.active=true;
            }

            return nav;
        })
        setNavData(newNavData);
        sectionActive(target);
    }

  return (
    <div className={`sideMenu ${active ? `active` : undefined}`}>
        <a href="#" className="logo">
            <i className="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
            {
                navData.map(item => (
                    <NavListItem key={item._id} 
                    item={item} 
                    navOnClick={handleNavOnClick} />
                ))
            }
        </ul>

        <ul className='socials'>
            {
                socialListData.map(item => (
                    <SocialListItem key={item._id} item={item} className={item._id===4 ? `share ${item.icon}` : item.icon}/>
                ))
            }
        </ul>
    </div>
  )
}

export default SideMenu