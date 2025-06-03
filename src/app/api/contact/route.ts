import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, services, message, referral } = await request.json();

    // Format the services array into a string
    const servicesList = Array.isArray(services) ? services.join(', ') : services;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Stillwater Contact Form <contact@stillwaterwebdev.com>',
      to: 'abel@stillwaterwebdev.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Services Interested In:</strong> ${servicesList || 'Not specified'}</p>
        <p><strong>How they heard about us:</strong> ${referral || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
} 