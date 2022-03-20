import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
  useAuthState,
} from "react-firebase-hooks/auth";
import Auth from "../components/Auth";
import { auth } from "../config/firebase";

export const Authentication: React.FC = ({ children }): React.ReactElement => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const sinInWithProvider = (provider: string) => {
    switch (provider) {
      case "facebook":
        signInWithFacebook();
        break;

      case "google":
        signInWithGoogle();
        break;
    }
  };

  const handleAuth = ({
    username,
    password,
    type,
  }: {
    username: string;
    password: string;
    type: string;
  }) => {
    console.log(type);
    console.log(username);
    console.log(password);
  };

  if (user && !loading && !error) {
    return <>{children}</>;
  }

  if (!user && !loading) {
    return <Auth onProviderLogin={sinInWithProvider} onAuth={handleAuth} />;
  }

  return <div />;
};

export default Authentication;
