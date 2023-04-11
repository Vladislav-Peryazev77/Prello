import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/shared/config/supabase";
import { SENTRY_DSN } from "./sentry";

const IS_DEVTOOLS = import.meta.env.DEV;

export { SUPABASE_URL, SUPABASE_ANON_KEY };
