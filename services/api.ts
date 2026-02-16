import { LeadFormData } from '../types';
import { getUTMParams } from '../utils/utm';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3dtknDrbSihWgL8eSyh2vhcd5DNGRniBQqrFyqZQYKOz-L8jhZtxrLMblWMCZsllb4A/exec';

/*
  ================================================================================
  INSTRUCTIONS FOR GOOGLE APPS SCRIPT
  ================================================================================
  1. Go to https://script.google.com/
  2. Create a new project.
  3. Paste the following code into Code.gs (delete existing code).
  4. Save the project.
  5. Click "Deploy" -> "New Deployment".
  6. Select type: "Web app".
  7. Description: "Lead Form API v2".
  8. Execute as: "Me" (your email).
  9. Who has access: "Anyone" (IMPORTANT).
  10. Click "Deploy".
  11. Copy the "Web app URL" and paste it into the GOOGLE_SCRIPT_URL constant above.
  
  ================================================================================
  GOOGLE APPS SCRIPT CODE (COPY BELOW THIS LINE)
  ================================================================================

  function doPost(e) {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
      var sheetName = 'Sheet1'; 
      var doc = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = doc.getSheetByName(sheetName);

      // If sheet doesn't exist, create it and add headers in the requested order
      if (!sheet) {
        sheet = doc.insertSheet(sheetName);
        sheet.appendRow([
          'Date', 
          'Name', 
          'Phone', 
          'Email', 
          'Experience', 
          'Specialization', 
          'Stage', 
          'Source', 
          'UTM Source', 
          'UTM Medium', 
          'Campaign Name', 
          'Adgroup Name', 
          'Ad Name', 
          'Match Type', 
          'Device', 
          'Keyword', 
          'Placement'
        ]);
      }

      var data = JSON.parse(e.postData.contents);

      sheet.appendRow([
        new Date(),                 // Date
        data.name || '',            // Name
        data.phone || '',           // Phone
        data.email || '',           // Email
        data.experience || '',      // Experience
        data.specialization || '',  // Specialization
        data.stage || '',           // Stage
        data.source || '',          // Source
        data.utm_source || '',      // utm_source
        data.utm_medium || '',      // utm_medium
        data.utm_campaign || '',    // campaign name
        data.utm_adgroup || '',     // adgroup name
        data.utm_content || '',     // ad name (mapped from utm_content)
        data.matchtype || '',       // match type
        data.utm_device || '',      // device
        data.utm_term || '',        // keyword (mapped from utm_term)
        data.placement || ''        // placement
      ]);

      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'success' }))
        .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
        .setMimeType(ContentService.MimeType.JSON);
    } finally {
      lock.releaseLock();
    }
  }

  function doGet(e) {
    return ContentService
      .createTextOutput(JSON.stringify({'result': 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  ================================================================================
*/

export const submitLeadForm = async (data: LeadFormData): Promise<boolean> => {
  try {
    const utms = getUTMParams();
    const payload = {
      ...data,
      ...utms,
      submittedAt: new Date().toISOString()
    };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      mode: 'no-cors' 
    });

    return true;
  } catch (error) {
    console.error("Form submission failed", error);
    return false;
  }
};