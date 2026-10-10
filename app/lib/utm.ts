const ALLOWED_UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
] as const;

export function withAllowedUtms(destination: string) {
  const url = new URL(destination, window.location.origin);
  const sourceParams = new URLSearchParams(window.location.search);

  for (const key of ALLOWED_UTM_KEYS) {
    const value = sourceParams.get(key)?.trim();
    if (value && value.length <= 200) {
      url.searchParams.set(key, value);
    }
  }

  return url.toString();
}
