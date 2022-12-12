/*archivo de configuracion de login & logout con google*/

import { app } from './index.js'
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
import user from '../store/profile.js';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const loginWithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        user.value = result.user
        localStorage.setItem("user", JSON.stringify(user)); 
    })
    .catch((error) => {
        console.warn('error',error);
    });
}

function logOut(){
    signOut(auth).then(() => {
        console.log("logout");
        user.value = null
        localStorage.setItem("user", JSON.stringify(user)); 
      }).catch((error) => {
        console.warn('error',error);
      });
}


export { loginWithGoogle, logOut}