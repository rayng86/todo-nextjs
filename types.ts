import { User } from '@supabase/supabase-js';

export type AuthUserType = {
  authUser: User | null,
}