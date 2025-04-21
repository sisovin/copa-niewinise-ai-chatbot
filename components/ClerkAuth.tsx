import React from 'react';
import { CustomSignIn, CustomSignUp, CustomUserButton, useCustomUser } from './CustomClerkComponents';

const ClerkAuth = () => {
  const { isSignedIn } = useCustomUser();

  return (
    <div>
      {isSignedIn ? (
        <div>
          <CustomUserButton />
          <p>Welcome back!</p>
          <a href="/billing-settings">Go to Billing Settings</a>
        </div>
      ) : (
        <div>
          <CustomSignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          <CustomSignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
      )}
    </div>
  );
};

export default ClerkAuth;
