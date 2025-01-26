import { ReactElement, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";

type ProtectedRouteProps = {
  children: ReactElement;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    // Add a loading state while waiting for Firebase to determine the auth state
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
