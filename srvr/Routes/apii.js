import express, { response } from 'express'
import { apii } from "../Controller/apii.js"
import { find } from '../Controller/find.js'


const router=express.Router()

router.get('/find/:id',find)
router.get('/:id',apii)

export default router;      
