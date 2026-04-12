import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // In a real app, we should verify the chairman's session here.
  // For now, we assume the request is authorized if it comes from the dashboard.

  try {
    // Generate a random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

    // Delete any existing chairman signup codes
    await supabase
      .from('otp_codes')
      .delete()
      .eq('email', 'CHAIRMAN_SIGNUP_CODE');

    // Insert the new code
    const { data, error } = await supabase
      .from('otp_codes')
      .insert([
        {
          email: 'CHAIRMAN_SIGNUP_CODE',
          code: code,
          expires_at: expiresAt.toISOString()
        }
      ])
      .select()
      .single();

    if (error) throw error;

    return res.json({ success: true, code, expiresAt: expiresAt.toISOString() });
  } catch (err) {
    console.error('Generate code error:', err);
    return res.status(500).json({ error: 'Failed to generate signup code.' });
  }
}