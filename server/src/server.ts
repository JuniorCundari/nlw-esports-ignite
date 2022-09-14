import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    {
      id: 1,
      name: 'anúncio 1'
    },
    {
      id: 2,
      name: 'anúncio 2'
    },
    {
      id: 3,
      name: 'anúncio 3'
    },
    {
      id: 4,
      name: 'anúncio 4'
    },
  ])
})

app.listen(3333)
