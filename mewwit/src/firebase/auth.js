/*archivo de configuracion de login & logout con google*/

import { app } from './index.js'
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
import user from '../store/profile.js';
/*import { addUser } from './users.js';*/

const provider = new GoogleAuthProvider();
const auth = getAuth(app);


const loginWithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        
        let newUser = {
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            email: result.user.email,
            id: result.user.uid
        }
        user.value = {
            ...newUser
        }
        /*addUser(newUser)*/
    })
    .catch((error) => {
        console.warn('error',error);
    });
}

function logOut(){
    signOut(auth).then(() => {
        console.log("logout");
        user.value = null
      }).catch((error) => {
        console.warn('error',error);
      });
}


export { loginWithGoogle, logOut, user}