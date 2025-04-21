import { SignIn, SignUp, UserButton, useUser } from '@clerk/clerk-react';

const ClerkAuth = () => {
  const { isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <div>
          <UserButton />
          <p>Welcome back!</p>
        </div>
      ) : (
        <div>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
      )}
    </div>
  );
};

export default ClerkAuth;
