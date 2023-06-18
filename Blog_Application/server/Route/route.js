import express from 'express'
import { SignUpUser } from '../Controller/User-controller.js'
const router =express.Router()
router.route('/signup',SignUpUser)

export default router ;