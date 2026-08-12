import { json, createCookieSessionStorage } from '@vercel/remix';

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const theme = formData.get('theme');

    const sessionSecret =
      process.env.SESSION_SECRET || 'default-secret-change-in-production';

    const { getSession, commitSession } = createCookieSessionStorage({
      cookie: {
        name: '__session',
        httpOnly: true,
        maxAge: 604_800,
        path: '/',
        sameSite: 'lax',
        secrets: [sessionSecret],
        secure: true,
      },
    });

    const session = await getSession(request.headers.get('Cookie'));
    session.set('theme', theme);

    return json(
      { status: 'success' },
      {
        headers: {
          'Set-Cookie': await commitSession(session),
        },
      }
    );
  } catch (error) {
    console.error('Error in set-theme action:', error);
    return json(
      { status: 'error', message: error.message },
      { status: 500 }
    );
  }
}