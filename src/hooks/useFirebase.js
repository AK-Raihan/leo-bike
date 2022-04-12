import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
   } from "firebase/auth";





initializeFirebase()

const useFirebase= ()=>{
    const [user, setUser]= useState({});
    const [authError, setAuthError] = useState('');
    const[isLoading, setIsLoading]= useState(true);



      const auth = getAuth();
      const googleProvider = new GoogleAuthProvider();

    // register
    const registerUser = (email, password, navigate)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, password };
                setUser(newUser);
                navigate('/');
                
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    // login
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    
      

    // google login
    const signInUsingGoogle = (location, navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser( result.user);
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }


    // observe
    useEffect(() => {
        const unsubcribed= onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser({})
          }
          setIsLoading(false)
        });
        return ()=>unsubcribed;
      }, []);

      const logout = ()=>{
        setIsLoading(true)
          signOut(auth)
          .then(() => {
            setUser({});
          })
          .finally(() => setIsLoading(false));
      };


    

      return{
          user,
          isLoading,
          authError,
          registerUser,
          loginUser,
          signInUsingGoogle,
          logout
      }


}


export default useFirebase;