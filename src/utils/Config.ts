import 'dotenv/config'

const PORT: number = parseInt(<string>process.env.PORT, 10) || 3005

export { PORT }
