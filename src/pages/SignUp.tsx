import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { GoogleAuthContainer } from '../components/GoogleAuthContainer'
import { auth, db } from '../config/firebase'

interface Doc {
  name: string | null
  score: number
}

export default function SignUp() {
  const handleGoogleSignUp = () => {
    // Create a new instance of GoogleAuthProvider from Firebase
    const provider = new GoogleAuthProvider()

    // Sign in with Google using a popup window
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // Retrieve the user ID from the authentication result
        const userId = result.user.uid

        // Check if the user ID exists
        if (userId) {
          // Define initial user data with name and score
          const initialUserData: Doc = {
            name: result.user.displayName,
            score: 0,
          }

          // Get a reference to the 'users' collection in Firestore
          const usersCollectionRef = collection(db, 'users')

          // Create a document reference for the user using their ID
          const userDocRef = doc(usersCollectionRef, userId)

          // Set the initial user data in the Firestore document
          await setDoc(userDocRef, initialUserData)
        }

        // Redirect the user to the home page ("/") after successful sign-in
        window.location.href = '/'
      })
      .catch((error) => {
        // Log any errors that occur during the sign-in process
        console.log(error)
      })
  }

  return (
    <GoogleAuthContainer
      heading="Create your account"
      paragraph="to continue to Quiz"
      onClick={handleGoogleSignUp}
      haveAccountText="Have an account?"
      path="/signIn"
      linkText="Sign in"
    />
  )
}
