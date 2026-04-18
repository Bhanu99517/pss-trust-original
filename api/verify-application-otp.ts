import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: 'Email and OTP are required' });

  // Must match the namespaced key used in send-application-otp
  const otpKey = `application:${email}`;

  try {
    const { data: otpData, error: fetchError } = await supabase
      .from('otp_codes')
      .select('*')
      .eq('email', otpKey)
      .eq('code', otp)
      .maybeSingle();

    if (fetchError || !otpData) {
      return res.status(400).json({ error: 'Invalid OTP. Please try again.' });
    }

    const expiresAt = new Date(otpData.expires_at);
    if (expiresAt < new Date()) {
      return res.status(400).json({ error: 'OTP has expired. Please request a new one.' });
    }

    // Clean up used OTP
    await supabase.from('otp_codes').delete().eq('email', otpKey);

    return res.json({ success: true });
  } catch (err) {
    console.error('Verify application OTP error:', err);
    return res.status(500).json({ error: 'An internal error occurred during verification.' });
  }
}
