import fastify from 'fastify'

const server = fastify()

server.addHook('preParsing', async(req, rep,pay) => {
  console.log('here from "preParsing" hook')
  return pay;
})
server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})