const DEFAULT_SITE_URL = 'https://www.metropolitanelectricng.com';

export const normalizeSiteUrl = (value?: unknown) => {
  if (typeof value !== 'string') {
    return DEFAULT_SITE_URL;
  }

  const trimmedValue = value.trim().replace(/\/+$/, '');

  if (!trimmedValue || trimmedValue === 'undefined' || trimmedValue === 'null') {
    return DEFAULT_SITE_URL;
  }

  if (
    trimmedValue === 'metropolitanelectricng.com' ||
    trimmedValue === 'http://metropolitanelectricng.com' ||
    trimmedValue === 'https://metropolitanelectricng.com'
  ) {
    return DEFAULT_SITE_URL;
  }

  return trimmedValue;
};

export const useSiteUrl = () => {
  const config = useRuntimeConfig();

  return normalizeSiteUrl(config.public?.baseUrl);
};

export const useAbsoluteUrl = (path?: string | null) => {
  const siteUrl = useSiteUrl();

  return (value?: string | null) => {
    const target = path ?? value;

    if (!target) {
      return siteUrl;
    }

    if (/^https?:\/\//i.test(target)) {
      return target;
    }

    return `${siteUrl}${target.startsWith('/') ? target : `/${target}`}`;
  };
};
