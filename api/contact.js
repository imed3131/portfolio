import { handleContact } from '../server/contact-handler.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const result = await handleContact(req.body)
  return res.status(result.status).json(result.body)
}
