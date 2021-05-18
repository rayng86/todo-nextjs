import { AuthUserType } from './../types';
import { User } from '@supabase/supabase-js';
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const useAuthState = () : { user: AuthUserType['authUser'] } => {
  const session = supabase.auth.session();
  const [user, setUser] = useState(session?.user ?? null);

  useEffect(() => {
    const {
      data: authListener
    } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return { user };
};

export default useAuthState;