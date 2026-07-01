const CANONICAL_HOST = 'www.metropolitanelectricng.com';
const APEX_HOST = 'metropolitanelectricng.com';

export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host')?.split(':')[0]?.toLowerCase();

  if (host !== APEX_HOST) {
    return;
  }

  const requestUrl = getRequestURL(event);

  return sendRedirect(
    event,
    `https://${CANONICAL_HOST}${requestUrl.pathname}${requestUrl.search}`,
    301,
  );
});
