import { UTMParams } from '../types';

let globalUTMs: UTMParams = {};

export const extractUTMParams = (): void => {
  const urlParams = new URLSearchParams(window.location.search);
  const keys: (keyof UTMParams)[] = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_adgroup', 
    'utm_content', 'utm_term', 'utm_device', 'placement', 'matchtype'
  ];

  keys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      globalUTMs[key] = value;
    }
  });
  
  // Also store in sessionStorage to persist across reloads if needed
  if (Object.keys(globalUTMs).length > 0) {
    sessionStorage.setItem('muj_utms', JSON.stringify(globalUTMs));
  } else {
    // Try retrieval from session if not in URL
    const stored = sessionStorage.getItem('muj_utms');
    if (stored) {
      globalUTMs = JSON.parse(stored);
    }
  }
};

export const getUTMParams = (): UTMParams => {
  return globalUTMs;
};