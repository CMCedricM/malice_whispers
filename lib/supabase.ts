import config from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseURL = config.SUPABASE_URL,
  supabaseAnonKey = config.SUPABSE_API_KEY;

if (!supabaseURL || !supabaseAnonKey)
  throw Error(`Missing SUPABASE API keys, ${supabaseURL}, ${supabaseAnonKey}`);

export const supabase = createClient(supabaseURL, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
