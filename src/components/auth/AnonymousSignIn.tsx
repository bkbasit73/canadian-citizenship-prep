'use client';

import { useEffect } from 'react';
import { useAuth } from '@/firebase';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';

export function AnonymousSignIn() {
  const auth = useAuth();

  useEffect(() => {
    if (auth && !auth.currentUser) {
      initiateAnonymousSignIn(auth);
    }
  }, [auth]);

  return null; // This component does not render anything
}
