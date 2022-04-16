import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    updateProfile,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
   } from "firebase/auth";





initializeFirebase()

const useFirebase= ()=>{
    const [user, setUser]= useState({});
    const [authError, setAuthError] = useState('');
    const[isLoading, setIsLoading]= useState(true);
    const [admin, setAdmin] = useState(false);



      const auth = getAuth();
      const googleProvider = new GoogleAuthProvider();



    // register
    const registerUser = (email, password, displayName, navigate)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName, password };
                setUser(newUser);
                // save user to the database
                saveUser(email, displayName, 'POST');
                // send name to firebase
                updateProfile(auth.currentUser, {
                  displayName: displayName
                }).then(() => {
                }).catch((error) => {
                });
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
            const user = result.user;
            // save user to the database
            saveUser(user.email, user.displayName, 'PUT');
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


      // admin checking
      useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

  
      // SAVE USER TO THE DATABASE
      const saveUser = (email, displayName, method) => {
          const user = { email, displayName };
          fetch('http://localhost:5000/users', {
              method: method,
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })
              .then()
      }

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
          admin,
          registerUser,
          loginUser,
          signInUsingGoogle,
          logout
      }


}


export default useFirebase;