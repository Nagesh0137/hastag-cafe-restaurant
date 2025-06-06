# EmailJS Setup Guide for The Hastag Cafe Website

## Overview

This guide will help you set up EmailJS to enable email functionality for both the contact form and table booking modal on The Hastag Cafe website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Templates

### Template 1: Contact Form

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use these settings:

   - **Template Name**: Contact Form
   - **Template ID**: `contact_form`
   - **Subject**: `New Contact Message from {{from_name}}`
   - **Content**:

   ```
   Hello,

   You have received a new contact message from your website.

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}

   Best regards,
   The Hastag Cafe Website
   ```

### Template 2: Table Booking

1. Create another template with:

   - **Template Name**: Table Booking
   - **Template ID**: `table_booking`
   - **Subject**: `New Table Reservation Request from {{booking_name}}`
   - **Content**:

   ```
   Hello,

   You have received a new table reservation request.

   Customer Details:
   Name: {{booking_name}}
   Email: {{booking_email}}
   Phone: {{booking_phone}}

   Reservation Details:
   Date: {{booking_date}}
   Time: {{booking_time}}
   Number of Guests: {{booking_guests}}
   Special Occasion: {{booking_occasion}}

   Special Requests:
   {{booking_requests}}

   Please contact the customer within 24 hours to confirm the reservation.

   Best regards,
   The Hastag Cafe Website
   ```

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (User ID)
3. Copy this key

## Step 5: Update the Website Code

1. Open `index.html`
2. Find the line: `emailjs.init("YOUR_PUBLIC_KEY");`
3. Replace `YOUR_PUBLIC_KEY` with your actual public key
4. Find the lines with `YOUR_SERVICE_ID` and replace with your service ID
5. Replace `YOUR_TEMPLATE_ID` with `contact_form`
6. Replace `YOUR_BOOKING_TEMPLATE_ID` with `table_booking`

## Example Configuration

```javascript
// Replace these values with your actual EmailJS credentials
emailjs.init("user_abcd1234567890"); // Your public key

// In the contact form section
emailjs.send("service_abc123", "contact_form", templateParams);

// In the booking form section
emailjs.send("service_abc123", "table_booking", templateParams);
```

## Step 6: Test the Forms

1. Open your website in a browser
2. Try submitting the contact form
3. Try booking a table through the modal
4. Check your email (including spam folder) for test messages

## Troubleshooting

- **403 Forbidden**: Check that your public key is correct
- **400 Bad Request**: Verify template IDs match exactly
- **Templates not found**: Ensure templates are published/active
- **No emails received**: Check spam folder and email service configuration

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS has rate limiting to prevent abuse
- Consider adding a captcha for production use

## Rate Limits (Free Plan)

- 200 emails per month
- Upgrade to paid plan for higher limits

## Support

For issues with EmailJS setup, visit their documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
