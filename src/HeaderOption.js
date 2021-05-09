import Reach from 'react'
import './HeaderOption.css'

function HeaderOption ({ Icon, title}) {
    return (
        <div className ='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            <h3 className="headerOption__tile">{title}</h3>
        </div>
    )
}

export default HeaderOption;
