import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 3001
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
const CONTACT_TO = process.env.CONTACT_TO || GMAIL_USER
const distPath = path.join(__dirname, '..', 'dist')
const hasDist = fs.existsSync(path.join(distPath, 'index.html'))

const app = express()

app.use(cors({ origin: true }))
app.use(express.json({ limit: '32kb' }))

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

app.post('/api/contact', async (req, res) => {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return res.status(503).json({
      error: 'Email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in your .env file.',
    })
  }

  const { name, email, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
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

    res.json({ ok: true })
  } catch (err) {
    console.error('Failed to send email:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again or email directly.' })
  }
})

if (hasDist) {
  app.use(express.static(distPath))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
