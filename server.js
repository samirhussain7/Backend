const express = require('express')
const app = express()
const fs = require('node:fs')
const path = require('path')
const User = require('./models/user')

// middleware and settings
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


// Routing
app.get('/', (req, res) => {
    res.render('index')
})

// Create
app.post('/create', async (req, res) => {
    const {name, role, image} = req.body
    const saveData = await User.create({
        name,
        role,
        image
    })

    res.redirect('/')
})

// Read
app.get('/view', async (req, res) => {
    const users = await User.find()
    res.render('show', {users})
})

// Delete
app.get('/delete/:id', async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.redirect('/view')
})

// Update
app.get('/edit/:id', async (req, res) => {
    const user = await User.findOne({_id: req.params.id})
    res.render('edit', {user})
})


app.post('/edit/:id', async (req, res) => {
    const update = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name !== "" ? req.body.name : req.body.oldName,
        role: req.body.role !== "" ? req.body.role : req.body.oldRole,
        image: req.body.image !== "" ? req.body.image : req.body.oldImage
    })
    res.redirect('/view')
})

app.listen(3000, () => {
    console.log("Server is running")
})