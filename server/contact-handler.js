import nodemailer from 'nodemailer'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function handleContact(body) {
  const GMAIL_USER = process.env.GMAIL_USER
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
  const CONTACT_TO = process.env.CONTACT_TO || GMAIL_USER

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return {
      status: 503,
      body: {
        error: 'Email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.',
      },
    }
  }

  const { name, email, message } = body ?? {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { status: 400, body: { error: 'Name, email, and message are required.' } }
  }

  if (!isValidEmail(email)) {
    return { status: 400, body: { error: 'Please enter a valid email address.' } }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: CONTACT_TO,
      replyTo: email.trim(),
      subject: `Portfolio message from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        '',
        message.trim(),
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
        <hr />
        <p>${message.trim().replace(/\n/g, '<br />')}</p>
      `,
    })

    return { status: 200, body: { ok: true } }
  } catch (err) {
    console.error('Failed to send email:', err)
    return {
      status: 500,
      body: { error: 'Failed to send message. Please try again or email directly.' },
    }
  }
}
