import { LeadFormData } from '../types';
import { getUTMParams } from '../utils/utm';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwKNnGdbRfsLQLSQQ8_Lm1URaMfGzj5cL_aBIqmvbYQlTg6se_0Suy-mOmrgvLwiCTBMw/exec';

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
  7. Description: "Lead Form API v3".
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

      // If sheet doesn't exist, create it and add headers
      if (!sheet) {
        sheet = doc.insertSheet(sheetName);
        sheet.appendRow([
          'Lead ID',    // Column 1
          'Date',       // Column 2
          'Name',       // Column 3
          'Phone',      // Column 4
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
      var leadId = data.leadId || '';
      
      // Prepare row data
      var rowData = [
        leadId,
        new Date(),
        data.name || '',
        data.phone || '',
        data.email || '',
        data.experience || '',
        data.specialization || '',
        data.stage || '',
        data.source || '',
        data.utm_source || '',
        data.utm_medium || '',
        data.utm_campaign || '',
        data.utm_adgroup || '',
        data.utm_content || '',
        data.matchtype || '',
        data.utm_device || '',
        data.utm_term || '',
        data.placement || ''
      ];

      // LOGIC: Check if Lead ID exists. If so, update that row. If not, append.
      var rowIndex = -1;
      
      if (leadId) {
        // Read the first column (Lead IDs)
        // getDataRange() gets all data, we only need Col A
        // Just getting column A up to the last row
        var lastRow = sheet.getLastRow();
        if (lastRow > 1) {
            var ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues(); // Get IDs excluding header
            for (var i = 0; i < ids.length; i++) {
                if (ids[i][0] == leadId) {
                    rowIndex = i + 2; // +2 because array is 0-indexed and we started at row 2
                    break;
                }
            }
        }
      }

      if (rowIndex > 0) {
        // Update existing row
        // We overwrite the entire row to ensure latest data
        sheet.getRange(rowIndex, 1, 1, rowData.length).setValues([rowData]);
      } else {
        // Append new row
        sheet.appendRow(rowData);
      }

      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'success', 'updated': rowIndex > 0 }))
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
      mode: 'no-cors',
      keepalive: true // Ensures request completes even if page unloads/tab closes
    });

    return true;
  } catch (error) {
    console.error("Form submission failed", error);
    return false;
  }
};