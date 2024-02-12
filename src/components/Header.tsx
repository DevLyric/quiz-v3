import { User, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { UserPhoto } from './user/UserPhoto'

export default function Header() {
  const [currentUser, setCurrentUser] = useState<User>({} as User)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setCurrentUser(user)
      } else {
        setIsLoggedIn(false)
      }
    })

    return () => {
      // Desregistrar o observador ao desmontar o componente
      unsubscribe()
    }
  }, [])

  return (
    <header className="h-20 flex items-center border-b">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="text-xl font-semibold">
          Quiz
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/leaderboard" className="font-medium tracking-wider">
            Leaderboard
          </Link>
          {isLoggedIn ? (
            <div className="relative flex items-center gap-3">
              {currentUser.photoURL && (
                <UserPhoto
                  onClick={() => setShowModal(!showModal)}
                  url={currentUser.photoURL}
                />
              )}
              {showModal && (
                <div className="absolute -bottom-40 -right-2 flex flex-col items-center py-5 w-72 gap-2 rounded-xl bg-white shadow-md">
                  <div className="flex items-center gap-4">
                    {currentUser.photoURL && (
                      <UserPhoto url={currentUser.photoURL} />
                    )}
                    <div className="flex flex-col">
                      <p>{currentUser.displayName}</p>
                      <p className="text-gray-400">{currentUser.email}</p>
                    </div>
                  </div>
                  <Link to="/manage-account">Manage account</Link>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      signOut(auth)
                    }}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signIn" className="font-medium tracking-wider">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
