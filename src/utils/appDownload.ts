import type React from 'react';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.kapp.smartgram&pli=1';

export const APP_STORE_URL =
  'https://apps.apple.com/in/app/aapka/id6745569996';

/** Detects whether the active client device is running iOS or iPadOS. */
export function isIOSDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return /iPad|iPhone|iPod/.test(ua) || isIPadOS;
}

/** Returns App Store URL for iOS/iPadOS devices and Google Play Store URL for Android/others. */
export function getAppStoreUrl(): string {
  return isIOSDevice() ? APP_STORE_URL : PLAY_STORE_URL;
}

/** Re-evaluates the target store URL at click time so dynamic device emulation also routes accurately. */
export function handleAppDownloadClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  renderedUrl: string
): void {
  const liveUrl = getAppStoreUrl();
  if (liveUrl !== renderedUrl) {
    e.preventDefault();
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  }
}
