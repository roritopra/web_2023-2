import { Menu } from './Menu'

export function Header () {
  const data = [
    {
      id: 1,
      text: 'Featuring',
      options: [
        {
          id: crypto.randomUUID(),
          text: 'Misión/Visión'
        },
        {
          id: crypto.randomUUID(),
          text: 'Valores'
        },
        {
          id: crypto.randomUUID(),
          text: 'Organización'
        }
      ]
    },
    {
      id: 2,
      text: 'Prices',
      options: [
        {
          id: crypto.randomUUID(),
          text: 'Consultoria Web'
        },
        {
          id: crypto.randomUUID(),
          text: 'Auditoria'
        },
        {
          id: crypto.randomUUID(),
          text: 'Diseño de Branding'
        }
      ]
    },
    {
      id: 3,
      text: 'Testimonial',
      options: null
    },
    {
      id: 4,
      text: 'Help',
      options: null
    }
  ]
  return (
    <header>
      <Menu menu={data} />
    </header>
  )
}
