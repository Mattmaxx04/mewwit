import { app } from "./index.js";
import { getFirestore, onSnapshot, collection, query, getDoc, addDoc, where, deleteDoc } from "firebase/firestore";
import { posts } from "../store/posts";
import user from '../store/profile.js'

/*conexion a la base de firebase*/
const db = getFirestore(app);

/*posts.value = traerPosts()*/
const postRef = collection(db, "posts");

/*obtengo todos los posts*/
const getPosts = () =>{
onSnapshot(postRef, (querySnapshot) => {
  posts.value = [];
  querySnapshot.forEach((doc) => {
    
    const post = {
      id: doc.id,
      date:doc.data().post_date.toDate(),
      title: doc.data().post_title,
      img: doc.data().post_img,
      body: doc.data().post_body,
      user: doc.data().post_username,
      pic:doc.data().post_uphoto,
      userid:doc.data().post_userid
    };

    posts.value.push(post);
    posts.value.sort((a,b)=>b.date - a.date)
  });
});
}
/*agrega posts*/
const addPost = (post) => {
  addDoc(postRef, post);
};

const deletePost = (id)=>{
  deleteDoc(doc(postRef,id))
}

/*
const getPostWithId=(postId)=>{
  const q = query(postRef, where("postId", "==", postId));  
  let post = [] 
  getDoc(q).then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
      let newPost = {
        id: doc.id,
      title: doc.data().post_title,
      img: doc.data().post_img,
      body: doc.data().post_text,
      user: doc.data().user_name,
      userpic:doc.data().user_pic
      }
      console.log(newPost);
      post.push(newPost)
    })
    return post
  })
}
*/


export { addPost, deletePost, getPosts };
