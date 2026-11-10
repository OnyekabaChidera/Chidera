import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, name } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY!,
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: name || '' },
      listIds: [Number(process.env.BREVO_LIST_ID || 2)],
      updateEnabled: true,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    // If already exists, treat as success
    if (res.status === 400) {
      return NextResponse.json({ ok: true, already: true });
    }
    return NextResponse.json({ error: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
