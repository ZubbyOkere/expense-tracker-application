'use client'


import { auth, provider } from "@/firebase"
import { signInWithPopup } from "firebase/auth"
import { useRouter } from "next/navigation"

const Auth = () => {
    const router = useRouter()
    const signInWithGoogle = async()=>{
        const res = await signInWithPopup(auth, provider)
        console.log(res);
        const authItems = {
            userID: res.user.uid,
            userID: res.user.displayName,
            userID: res.user.photoURL
        }
        localStorage.setItem('auth', JSON.stringify(authItems))
        router.push('/')  
  }
  return (
    <div>
        <p>Please sign in to continue</p>
        <button onClick={signInWithGoogle}>Sign in here</button>
    </div>
  )
}

export default Auth