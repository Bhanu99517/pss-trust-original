import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { data, error } = await supabase
      .from('otp_codes')
      .select('*')
      .eq('email', 'CHAIRMAN_SIGNUP_CODE')
      .gt('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) throw error;

    if (!data) {
      return res.json({ success: true, code: null });
    }

    return res.json({ 
      success: true, 
      code: data.code, 
      expiresAt: data.expires_at 
    });
  } catch (err) {
    console.error('Get code error:', err);
    return res.status(500).json({ error: 'Failed to fetch signup code.' });
  }
}