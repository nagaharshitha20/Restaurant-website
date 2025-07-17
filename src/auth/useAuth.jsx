// hooks/useAuth.js
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  return currentUser;
};

export default useAuth;
