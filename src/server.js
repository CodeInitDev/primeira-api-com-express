import express from 'express'

import * as database from './database.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello REST API')
})

app.get('/api/noticias', async (req, res) => {
  const noticias = await database.findAll()
  res.json(noticias)
})

app.post('/api/noticias', async (req, res) => {
  const { titulo, texto } = req.body
  const noticia = await database.create({ titulo, texto })
  res.status(201).json({ id: noticia.id })
})

app.put('/api/noticias/:id', async (req, res) => {
  const { id } = req.params
  const { titulo, texto } = req.body
  const noticia = await database.update(id, { titulo, texto })

  if (!noticia) return res.status(404).json({ error: 'Noticia nao encontrada!' })

  res.json(noticia)
})

app.delete('/api/noticias/:id', async (req, res) => {
  const { id } = req.params
  await database.remove(id)

  res.status(204).send()
})

app.listen(3333, () => {
  console.log('Server iniciado na porta 3333')
})
