// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCart } from '../redux/filterSlice';     // ✅ Correct
// import useAuth from '../auth/useAuth';               // ✅ FIXED
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { db } from '../Firebase';


// const CartSync = () => {
//   const user = useAuth();
//   const cart = useSelector((state) => state.filters.cart);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const loadCart = async () => {
//       if (user) {
//         const docSnap = await getDoc(doc(db, 'users', user.uid));
//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           dispatch(setCart(data.cart || []));
//         }
//       }
//     };
//     loadCart();
//   }, [user, dispatch]);

//   useEffect(() => {
//     if (user) {
//       setDoc(doc(db, 'users', user.uid), { cart }, { merge: true });
//     }
//   }, [cart, user]);

//   return null;
// };

// export default CartSync;


// src/pages/CartSync.jsx
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import useAuth from "../auth/useAuth" // ✅ match your folder structure
import { setCart } from '../redux/filterSlice'; // ✅ match your folder structure

const CartSync = () => {
  const user = useAuth();
  const cart = useSelector((state) => state.filters.cart);
  const dispatch = useDispatch();
  const debounceRef = useRef(null);

  // ✅ 1. Load cart from Firestore
  useEffect(() => {
    const loadCart = async () => {
      if (!user) return;
      const docRef = doc(db, 'carts', user.uid); // ✅ check "carts" collection
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        dispatch(setCart(data.cart || []));
      }
    };
    loadCart();
  }, [user, dispatch]);

  // ✅ 2. Save cart to Firestore (debounced)
  useEffect(() => {
    if (!user) return;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      const docRef = doc(db, 'carts', user.uid);
      await setDoc(docRef, { cart }, { merge: true }); // ✅ overwrite cart
    }, 300); // wait for Redux to update first

    return () => clearTimeout(debounceRef.current);
  }, [cart, user]);

  return null;
};

export default CartSync;
