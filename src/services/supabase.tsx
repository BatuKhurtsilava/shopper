import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sagifxrlorayrubkanrc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZ2lmeHJsb3JheXJ1YmthbnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMDg1MzEsImV4cCI6MjAxNDc4NDUzMX0.7aeeJAIlg5dpfEjOYR2pttNbWgsrb_rfBG2anvxEh64";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
