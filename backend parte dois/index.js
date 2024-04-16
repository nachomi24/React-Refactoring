require('dotenv').config()

const cors = require('cors');

const { Sequelize, Model, DataTypes } = require('sequelize')
const express = require('express')
const app = express()

//middelware json y cors
app.use(express.json());
app.use(cors());
 
const sequelize = new Sequelize(process.env.DATABASE_URL)//crea nuevo bjeto de sequalize

//Declaracion del Modelo (tablas de la DB)

class Note extends Model {}
Note.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  important: {
    type: DataTypes.BOOLEAN
  },
  date: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'note'
})
// Inicializar tabla si no existe en la DB
Note.sync()//crea la tabla si no


//endpoint all notes
app.get('/api/notes', async (req, res) => {
  const notes = await Note.findAll()
  console.log(notes.map(n=>n.toJSON()))
  res.json(notes)
})

//endpoint create note
app.post('/api/notes', async (req, res) => {
    console.log(req.body)
    const note = await Note.create(req.body)
    res.json(note)
  })


// otra forma de crear notas, con el uso de build se pueden editar los valores antes de 
// gurdarlos en la DB

// const note = Note.build(req.body)
// await note.save()

//  Manejo de errores basico 

// app.post('/api/notes', async (req, res) => {
//   try {
//     const note = await Note.create(req.body)
//     return res.json(note)
//   } catch(error) {
//     return res.status(400).json({ error })
//   }
// })

// obtener una nota
app.get('/api/notes/:id', async (req, res) => {
    const note = await Note.findByPk(req.params.id)
    if (note) {
      console.log(note.toJSON())
      res.json(note)
    } else {
      res.status(404).end()
    }
  })


//opcion 1
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// opcion 2 revisando la conexion a la DB
// const start = async () => {
//   await testDb()
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
//   })
// }

// start()

