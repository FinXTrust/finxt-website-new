/**
 * FinXT Live Studies — Google Apps Script
 *
 * Paste into Extensions → Apps Script on the FinXT Live Study Applications sheet.
 * After changes: Deploy → Manage deployments → Edit → New version → Deploy.
 *
 * FORM_SECRET must match lib/liveStudiesFormSecurity.js (or NEXT_PUBLIC_LIVE_STUDIES_FORM_SECRET).
 */
const FORM_SECRET = 'finxt-ls-xK9mP2vQ7nR4wL8';

const ALLOWED_COUNTRIES = ['leeds', 'poland', 'spain', 'usa', 'mexico', 'india'];

function sanitizeCell(value, maxLength) {
  const str = String(value || '').trim().slice(0, maxLength);
  if (!str) return '';
  if (/^[=+\-@]/.test(str)) return `'${str}`;
  return str;
}

function isValidEmail(email) {
  const value = String(email || '').trim();
  return value.length > 0 && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(phone) {
  const value = String(phone || '').trim();
  return value.length >= 7 && value.length <= 30 && /^[\d\s+().-]+$/.test(value);
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ status: 'error', message: 'Missing body' });
    }

    const data = JSON.parse(e.postData.contents);

    // Honeypot — silent success so bots do not retry
    if (sanitizeCell(data.website, 200)) {
      return jsonResponse({ status: 'success' });
    }

    // Shared secret — blocks drive-by POSTs without the form
    if (data.form_secret !== FORM_SECRET) {
      return jsonResponse({ status: 'error', message: 'Unauthorized' });
    }

    const country = sanitizeCell(data.country, 50).toLowerCase();
    if (!ALLOWED_COUNTRIES.includes(country)) {
      return jsonResponse({ status: 'error', message: 'Invalid country' });
    }

    const firstName = sanitizeCell(data.first_name, 100);
    const lastName = sanitizeCell(data.last_name, 100);
    const email = sanitizeCell(data.email, 254);

    if (!firstName || !lastName || !isValidEmail(email)) {
      return jsonResponse({ status: 'error', message: 'Invalid required fields' });
    }

    if (!isValidPhone(data.phone)) {
      return jsonResponse({ status: 'error', message: 'Invalid phone' });
    }

    if (data.terms_confirmation !== 'Confirmed') {
      return jsonResponse({ status: 'error', message: 'Terms not accepted' });
    }

    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName('Applications');

    sheet.appendRow([
      new Date(),
      country,
      sanitizeCell(data.language, 30),
      firstName,
      lastName,
      email,
      sanitizeCell(data.phone, 30),
      sanitizeCell(data.gender, 50),
      sanitizeCell(data.ethnicity, 80),
      sanitizeCell(data.ethnicity_other, 100),
      sanitizeCell(data.skin_tone, 20),
      sanitizeCell(data.birth_year, 4),
      sanitizeCell(data.age_range, 20),
      sanitizeCell(data.same_gender_sibling, 10),
      sanitizeCell(data.family_member_20_years, 10),
      sanitizeCell(data.makeup_day_to_day, 80),
      sanitizeCell(data.wear_glasses, 10),
      sanitizeCell(data.employer, 150),
      sanitizeCell(data.occupation, 150),
      sanitizeCell(data.referral_code, 50),
      sanitizeCell(data.participated_before, 10),
      sanitizeCell(data.preferred_contact, 30),
      sanitizeCell(data.future_studies_opt_in, 10),
      sanitizeCell(data.terms_confirmation, 20),
    ]);

    return jsonResponse({ status: 'success' });
  } catch (error) {
    return jsonResponse({ status: 'error', message: 'Server error' });
  }
}

function sendDailyApplicationSummary() {
  const recipient = 'finxt.info@gmail.com';
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('Applications');

  const data = sheet.getDataRange().getValues();
  const rows = data.slice(1);

  const today = new Date();
  const todayString = Utilities.formatDate(
    today,
    Session.getScriptTimeZone(),
    'dd/MM/yyyy'
  );

  const todaysRows = rows.filter((row) => {
    const timestamp = row[0];

    if (!(timestamp instanceof Date)) return false;

    const rowDate = Utilities.formatDate(
      timestamp,
      Session.getScriptTimeZone(),
      'dd/MM/yyyy'
    );

    return rowDate === todayString;
  });

  if (todaysRows.length === 0) {
    MailApp.sendEmail({
      to: recipient,
      subject: `FinXT Daily Study Applications Summary - ${todayString}`,
      body: `No new study applications were received today (${todayString}).`,
    });
    return;
  }

  const countryCounts = {};

  todaysRows.forEach((row) => {
    const country = row[1] || 'Unknown';
    countryCounts[country] = (countryCounts[country] || 0) + 1;
  });

  const countrySummary = Object.entries(countryCounts)
    .map(([country, count]) => `- ${country}: ${count}`)
    .join('\n');

  const applicantList = todaysRows
    .map((row, index) => {
      return `${index + 1}. ${row[3]} ${row[4]}
Email: ${row[5]}
Phone: ${row[6]}
Country: ${row[1]}
Age Range: ${row[12]}
Preferred Contact: ${row[21]}`;
    })
    .join('\n\n');

  const emailBody = `FinXT Daily Study Applications Summary

Date: ${todayString}

Total applications today: ${todaysRows.length}

Applications by country:
${countrySummary}

Applicants:
${applicantList}

Google Sheet:
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
`;

  MailApp.sendEmail({
    to: recipient,
    subject: `FinXT Daily Study Applications Summary - ${todayString}`,
    body: emailBody,
  });
}
