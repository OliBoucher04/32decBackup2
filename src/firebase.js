// import { initializeApp } from "firebase/app";
// import { useEffect, useState } from 'react';
// import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyBD-jnR0bAPYvNnoICbtZf8RhjFuZzgF1U",
//   authDomain: "decembre-2ab55.firebaseapp.com",
//   projectId: "decembre-2ab55",
//   storageBucket: "decembre-2ab55.appspot.com",
//   messagingSenderId: "673935860020",
//   appId: "1:673935860020:web:517c00b145b2362796c561",
//   measurementId: "G-86ZM5147QL"
// };

// const app = initializeApp(firebaseConfig);
// export const storage = getStorage();

// const PhotoComponent = () => {
//   const [photoURL, setPhotoURL] = useState('');

//   useEffect(() => {
//     const storage = getStorage();
//     console.log(storage);
//     const photoRef = ref(storage, '418643659_447693880926939_2651813574837682804_n.jpg'); // Remplacez 'chemin/vers/votre/photo.jpg' par le chemin vers votre photo dans Firebase Storage

//     const fetchPhotoURL = async () => {
//       try {
//         const url = await getDownloadURL(photoRef);
//         setPhotoURL(url);
//         console.log(url);
//       } catch (error) {
//         console.error('Error fetching photo URL:', error);
//       }
//     };

//     fetchPhotoURL();
//   }, []);

//   return (
//     <div>
//       <h1>Photo</h1>
//       {photoURL && <img src={photoURL} alt="Votre photo" />}
//     </div>
//   );
// };

// export default PhotoComponent;

