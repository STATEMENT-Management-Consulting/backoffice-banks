import { trustedDomains } from "../routes";

export function getUrlDomain(url: string): string | null {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^/?]+)/i;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function isTrustedDomain(
  url: string,
  otherDomains: string[] = []
): boolean {
  const domain = getUrlDomain(url);

  return domain
    ? [...trustedDomains, ...otherDomains].some((trustedDomain) =>
        domain.endsWith(trustedDomain)
      )
    : false;
}

export function getDeepUrlDomain(url: string): string | null {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^/?]+)/i;
  const match = url.match(regex);

  if (!match) return null;

  const domainParts = match[1].split(".");

  if (domainParts.length < 2) return match[1];

  const secondLevelDomain = domainParts.slice(-2).join(".");
  const subdomain = domainParts.slice(-3).join(".");

  return domainParts.length > 2 ? subdomain : secondLevelDomain;
}
