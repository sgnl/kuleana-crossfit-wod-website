const server = require('./server')
const { logger } = require('./services')

const PORT = process.env.PORT

server.listen(PORT, () => logger.info(`server started on http://localhost:${PORT}`))