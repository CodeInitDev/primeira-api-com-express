import crypto from 'node:crypto'

let noticias = []

export async function findAll() {
  return noticias
}

export async function create(noticia) {
  noticia.id = crypto.randomUUID()
  noticias.push(noticia)
  return noticia
}

export async function update(id, noticia) {
  const index = noticias.findIndex((n) => n.id === id)

  if (index === -1) return false

  noticia.id = id
  noticias = [...noticias.filter((n) => n.id !== id), noticia]

  return noticia
}

export async function remove(id) {
  noticias = noticias.filter((n) => n.id !== id)
}
