import { LeadFormData } from '../types';
import { getUTMParams } from '../utils/utm';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby33h2i9CYj9u3l5bvfVmKHY0F-8yyDp5PJWtFME7g7CiI2F8RRjly7hczIrHbsB127tg/exec';

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
          'Date',       // Column 1
          'Name',       // Column 2
          'Phone',      // Column 3
          'Email',      // Column 4
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
          'Placement',
          'Lead ID'     // Column 18 (Moved to end)
        ]);
      }

      var data = JSON.parse(e.postData.contents);
      var leadId = data.leadId || '';
      
      // Prepare row data
      var rowData = [
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
        data.placement || '',
        leadId // Lead ID at the end
      ];

      // LOGIC: Check if Lead ID exists. If so, update that row. If not, append.
      var rowIndex = -1;
      
      if (leadId) {
        // Read the Lead ID column (Column 18)
        var lastRow = sheet.getLastRow();
        if (lastRow > 1) {
            // getRange(row, column, numRows, numColumns)
            // Column 18 is Lead ID
            var ids = sheet.getRange(2, 18, lastRow - 1, 1).getValues(); 
            for (var i = 0; i < ids.length; i++) {
                if (ids[i][0] == leadId) {
                    rowIndex = i + 2; 
                    break;
                }
            }
        }
      }

      if (rowIndex > 0) {
        // Update existing row
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