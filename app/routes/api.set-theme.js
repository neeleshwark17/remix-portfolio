import { json, createCookieSessionStorage } from '@remix-run/cloudflare';

export async function action({ request, context }) {
  try {
    const formData = await request.formData();
    const theme = formData.get('theme');

    // For Cloudflare Pages, we need to handle the case where context.cloudflare might not be available
    const sessionSecret = context?.cloudflare?.env?.SESSION_SECRET || process.env.SESSION_SECRET;

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