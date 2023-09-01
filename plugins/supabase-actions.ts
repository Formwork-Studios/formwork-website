export default defineNuxtPlugin((nuxtApp) => {
  const client = useSupabaseClient();
  
  return {
    provide: {
      supabaseClient: client
    }
  };
});