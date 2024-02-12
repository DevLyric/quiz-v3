interface UserPhotoProps {
  onClick?: () => void
  url: string
}

export function UserPhoto({ onClick, url }: UserPhotoProps) {
  return (
    <img
      onClick={onClick}
      className="w-10 h-10 rounded-full cursor-pointer"
      src={url}
      alt="user photo"
    />
  )
}
