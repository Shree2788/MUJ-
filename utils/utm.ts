import { UTMParams } from '../types';

let globalUTMs: UTMParams = {};

export const extractUTMParams = (): void => {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Standard UTMs
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

  // Capture common aliases if standard UTMs are missing
  
  // keyword -> utm_term
  if (!globalUTMs.utm_term) {
    const kw = urlParams.get('keyword');
    if (kw) globalUTMs.utm_term = kw;
  }

  // device -> utm_device
  if (!globalUTMs.utm_device) {
    const dev = urlParams.get('device');
    if (dev) globalUTMs.utm_device = dev;
  }

  // ad_name -> utm_content
  if (!globalUTMs.utm_content) {
    const adName = urlParams.get('ad_name') || urlParams.get('adname');
    if (adName) globalUTMs.utm_content = adName;
  }
  
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