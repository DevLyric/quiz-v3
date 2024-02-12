import { Link } from 'react-router-dom'
import { AuthButton } from './AuthButton'

interface GoogleAuthContainerProps {
  heading: string
  paragraph: string
  onClick: () => void
  haveAccountText: string
  path: string
  linkText: string
}

export function GoogleAuthContainer({
  heading,
  paragraph,
  onClick,
  haveAccountText,
  path,
  linkText,
}: GoogleAuthContainerProps) {
  return (
    <div className="flex items-center justify-center mt-32 px-6">
      <div className="p-8 rounded-xl shadow-lg w-[420px] h-64">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <p className="text-gray-600">{paragraph}</p>

        <AuthButton onClick={onClick} />

        <p>
          {haveAccountText}{' '}
          <Link to={path} className="text-purple-500 hover:underline">
            {linkText}
          </Link>
        </p>
      </div>
    </div>
  )
}
