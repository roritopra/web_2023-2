import { useState } from 'react'
import logo from '../assets/logo.svg'
import '../styles/Header.css'

export function Menu ({ menu }) {
  const menuStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem'
  }

  return (
    <header className='header'>
      <div className='left'>
        <img src={logo} alt='' />
        <div className='left-names'>
          <ul style={menuStyles}>
            {
                    menu.map((item) => {
                      return (<Dropdown key={item.id} item={item} />)
                    })
                }
          </ul>
        </div>
      </div>
      <div className='right'>
        <a className='enter' href=''>Sign in</a>
        <a className='enter --sign' href=''>Sign up</a>
      </div>
    </header>
  )
}

function Dropdown ({ item }) {
  const [showList, setShowList] = useState(false)
  const { id, text, options } = item

  const toggleState = () => setShowList((prevState) => !prevState)
  return (
    <li className='drops-li' key={id} onMouseLeave={toggleState}>
      <a onMouseEnter={toggleState} onMouseLeave={() => setShowList(false)}>{text}</a>

      {
        showList ? <DropdownList options={options} /> : null
      }
    </li>
  )
}
function DropdownList ({ options }) {
  return (
    <ul className='dropdown-list'>
      {
         options?.map(({ id, text }) => {
           return (<li onClick={() => window.alert('Click')} key={id}>{text}</li>)
         })
     }
    </ul>
  )
}
