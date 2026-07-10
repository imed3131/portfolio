import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { handleContact } from './contact-handler.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 3001
const distPath = path.join(__dirname, '..', 'dist')
const hasDist = fs.existsSync(path.join(distPath, 'index.html'))

const app = express()

app.use(cors({ origin: true }))
app.use(express.json({ limit: '32kb' }))

app.post('/api/contact', async (req, res) => {
  const result = await handleContact(req.body)
  res.status(result.status).json(result.body)
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
