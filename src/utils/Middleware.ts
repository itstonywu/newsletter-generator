import express, { Application, Request, Response, NextFunction } from 'express'
import * as logger from './Logger'

const requestLogger = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
}

export default { requestLogger }
