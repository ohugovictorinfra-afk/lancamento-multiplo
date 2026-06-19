export function getCheckoutUrlWithUtms(baseUrl: string): string {
  const landingParams = new URLSearchParams(window.location.search);
  const checkoutUrl = new URL(baseUrl);
  landingParams.forEach((value, key) => {
    if (!checkoutUrl.searchParams.has(key)) {
      checkoutUrl.searchParams.set(key, value);
    }
  });
  return checkoutUrl.toString();
}
