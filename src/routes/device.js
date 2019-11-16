import { Router } from 'express'
import { Device } from '@/models'
import responses from '@/utils/responses'

const router = Router()

router.get('/', async (req, res, next) => {
  res.json({
    devices: await Device.find({})
  })
})

router.post('/', async (req, res, next) => {
  let newDevice = new Device()
  newDevice = req.body

  await newDevice.save()
  res.json(newDevice)
})

export default router
