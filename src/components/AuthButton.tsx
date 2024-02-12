import { GoogleIcon } from './icons/GoogleIcon'

interface AuthButtonProps {
  onClick: () => void
}

export function AuthButton({ onClick }: AuthButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded w-full py-3 px-6 border my-6 text-sm font-medium"
    >
      <GoogleIcon />
      Continue with Google
    </button>
  )
}
