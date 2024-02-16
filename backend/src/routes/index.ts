import type * as express from 'express'
import petRouter from '../routes/petRouter'
const router = (app: express.Router): void => {
  app.use('/pets', petRouter)
}
export default router
