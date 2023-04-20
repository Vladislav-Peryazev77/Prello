import { SUPABASE_API_URL, SUPABASE_ANON_KEY } from "./supabase";
import { SENTRY_DSN } from "./sentry";

const IS_DEVTOOLS = import.meta.env.DEV;
const IS_PRODUCTION = import.meta.env.PROD;

export {
  SUPABASE_API_URL,
  SUPABASE_ANON_KEY,
  IS_PRODUCTION,
  IS_DEVTOOLS,
  SENTRY_DSN,
};
