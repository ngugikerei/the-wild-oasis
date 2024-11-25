import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ibjctltbvpoabxoawigv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliamN0bHRidnBvYWJ4b2F3aWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0ODMyNjgsImV4cCI6MjA0NzA1OTI2OH0.3miaN9jt9BxGOiBrEx_UvZfWpd9-W8tgA63yGraK3D0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
