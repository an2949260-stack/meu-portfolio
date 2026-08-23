type Section = {
  id: string
  label: string
}

type HeaderProps = {
  sections: Section[]
}

export function Header({ sections }: HeaderProps) {
  return (
    <nav className="flex justify-between items-center p-6 bg-blue-900 text-white fixed w-full top-0 z-50">
      <ul className="flex gap-6">
        {sections.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="hover:text-blue-400 transition-colors"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Contato
      </a>
    </nav>
  )
}
