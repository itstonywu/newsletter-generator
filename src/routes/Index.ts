import { Router } from 'express'
import submissionsRouter from './Submissions'
import templatesRouter from './Templates'

const router = Router()

router.use('/api/submissions', submissionsRouter)
router.use('/api/templates', templatesRouter)

export default router
