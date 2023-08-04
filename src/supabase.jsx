import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zmqelajuvodwtdppvgyz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcWVsYWp1dm9kd3RkcHB2Z3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwNDA2OTQsImV4cCI6MjAwNTYxNjY5NH0.Hiq7eLIzJrLauelCzjxqT3mo0ObS5Gusg_YMRMA3rYc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

