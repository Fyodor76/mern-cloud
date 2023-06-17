const Router = require('express')
const User = require('../models/User')
const router = new Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require("express-validator")
const authMiddleware = require('../middleware/auth.middleware')
const fileService = require('../services/fileService')
const File = require('../models/File')



router.post('/registration',
    [
        check('email', 'Incorrect email')
            .isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12')
            .isLength({min: 3, max: 12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Incorrect request", errors})
        }
        const {email, password, name, surname} = req.body

        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }

        const hashPassword =  await bcrypt.hash(password, 8)
        const user = new User(
          {
              email,
              password: hashPassword,
              name,
              surname,
          })
        await user.save()
        await fileService.createDir(new File({user: user.id, name: '', path: ''}))
        return res.json({message: "User was created"})

    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})


router.post('/login',
    async (req, res) => {
        try {
            const {email, password} = req.body

            const user = await User.findOne({email})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }

            const isPassValid = bcrypt.compareSync(password, user.password)

            if (!isPassValid) {
                return res.status(404).json({message: "Invalid pasword"})
            }


            const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '30d'})

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar,
                }
            })


        } catch (e) {
            console.log(e)
            res.send({message: 'Server error'})
        }
    })


router.get('/user', authMiddleware,
  async (req, res) => {
      try {
        const user = await User.findOne({_id: req.user.id})

          const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '1h'})

          return res.json({
              token,
              user: {
                  id: user.id,
                  email: user.email,
                  diskSpace: user.diskSpace,
                  usedSpace: user.usedSpace,
                  avatar: user.avatar,
                  name: user.name,
                  surname: user.surname
              }
          })

      } catch (e) {
          console.log(e)
          res.send({message: 'Server error'})
      }
  })


router.put('/user', authMiddleware,
  async (req, res) => {
    try {

      const {id, name, surname, email}  = req.body


      const user = await User.findOneAndUpdate({
        _id: id
      }, {
        name: name,
        surname: surname,
        email: email
      }, {
        new: true
      })

      await user.save()
      res.json(user)

    } catch (e) {
      console.log(e)
      res.send({message: 'Error updating user'})
    }
  })

module.exports = router