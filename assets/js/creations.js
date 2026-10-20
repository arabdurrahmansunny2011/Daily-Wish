const config = {
  supabaseUrl: 'https://krtaoicqyvjntpgmtwer.supabase.co',
  supabaseAnonKey: 'sb_publishable_yFNyCa2IqrKAn2BRmB9eUw_26Ayc2Et',
  projectRegion: 'ap-southeast-2',
  storageBucket: 'dailywish',
  adminEmail: 'dailywish.admin@gmail.com'
};

export const appConfig = config;

export function getSupabaseClient() {
  if (typeof window === 'undefined') return null;

  if (!window.supabase) {
    window.supabase = null;
    return null;
  }

  return window.supabase;
}

export async function initializeSupabase() {
  if (typeof window === 'undefined') return null;

  if (!window.supabase) {
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    window.supabase = createClient(config.supabaseUrl, config.supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
  }

  return window.supabase;
}

export function isSupabaseConfigured() {
  return Boolean(config.supabaseUrl && config.supabaseAnonKey && config.supabaseUrl !== 'https://YOUR-SUPABASE-URL.supabase.co');
}
