import { LeadFormData } from '../types';
import { getUTMParams } from '../utils/utm';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxvMNndF8Ev7iZzM8x9YPzNYjEZ11Dxh-fHLuJHVYliTDyJy79rp_YnEBVzSdnnDr-3Jw/exec';

export const submitLeadForm = async (data: LeadFormData): Promise<boolean> => {
  try {
    const utms = getUTMParams();
    const payload = {
      ...data,
      ...utms,
      submittedAt: new Date().toISOString()
    };

    // Using no-cors mode because Google Scripts often have CORS issues when called directly from client JS without a proxy.
    // However, no-cors means we get an opaque response and can't check status. 
    // Standard fetch behavior for Google Apps Script is usually a redirect.
    // We will assume success if the network request fires, or handle it as best effort.
    // Ideally, for a real production app, we would use a proper backend proxy.
    
    // Per instructions: "send a single POST request via fetch() to this URL"
    
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      // headers: { "Content-Type": "text/plain;charset=utf-8" }, // often needed for GAS to avoid OPTIONS preflight failure
      mode: 'no-cors' 
    });

    // Since mode is no-cors, we can't read the response. We assume it went through.
    return true;
  } catch (error) {
    console.error("Form submission failed", error);
    return false;
  }
};