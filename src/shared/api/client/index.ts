import { createClient } from "@supabase/supabase-js";

import { SUPABASE_ANON_KEY, SUPABASE_API_URL } from "@/shared/config";

// Create a single supabase client for interacting with your database
export const client = createClient(SUPABASE_API_URL, SUPABASE_ANON_KEY);
