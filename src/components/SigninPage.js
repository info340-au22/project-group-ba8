import React from 'react';
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

export default function SignInPage(props) {
  const auth = getAuth();
  const uiConfigObj = {
    signInOptions: [
        { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName:true},
        { provider: GoogleAuthProvider.PROVIDER_ID}
    ],
    signInFlow:'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none'
  };

  return (
    <div className="react-body">
        <h2 className="text-center mt-5 mb-4">Welcome to Event Map!</h2>
        <div className="container">
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfigObj} />
        </div>
    </div>
  )
}