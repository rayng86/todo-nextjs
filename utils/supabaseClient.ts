import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY as string
);