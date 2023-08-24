import logo from '../assets/logo.svg'
import '../styles/Header.css'

export function Menu ({ menu }) {
  const menuStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem'
  }

  return (
    <header>
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
  const { id, text, options } = item
  return (
    <li key={id}>
      <a href=''>{text}</a>
      <DropdownList options={options} />
    </li>
  )
}
function DropdownList ({ options }) {
  return (
    <ul>
      {
         options?.map(({ id, text }) => {
           return (<li onClick={() => window.alert('Click')} key={id}>{text}</li>)
         })
     }
    </ul>
  )
}
