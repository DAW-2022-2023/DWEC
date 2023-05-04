import express, { json, urlencoded } from 'express'
import cors from 'cors'

const app = express()

const productos = [
  {
    idProdcuto: 1,
    nombre: 'Alumnos',
    estado: 'defectuoso',
    valido: true,
    fecha: new Date()
  },
  {
    idProdcuto: 2,
    nombre: 'Alumnos2',
    estado: 'operativo',
    valido: false,
    fecha: new Date()
  },
  {
    idProdcuto: 3,
    nombre: 'Alumnos3',
    estado: 'en estado solido',
    valido: true,
    fecha: new Date()
  },
];

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(json());

app.get('/', (req, res) => {
  res.json({ Data: 'API Works' })
})

app.get('/productos', (req, res) => {
  res.json({ Data: productos })
})

app.get('/productos/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = productos.find(x => x.idProdcuto === id)
    if (product === undefined) {
      res.json({ Error: `No existe el producto con id ${req.params.id}` })
      return;
    }
    res.json({ Data: product });
  } catch (error) {
    res.json({ Error: error.message });
  }
})

app.delete('/productos/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const indexProduct = productos.findIndex(x => x.idProdcuto === id)
    if (indexProduct === -1) {
      res.json({ Error: `No existe el producto con id ${req.params.id}` })
      return;
    }
    productos.splice(indexProduct, 1);
    res.json({ Data: "Producto borrado" })
  } catch (error) {
    res.json({ Error: error.message });
  }
})

app.listen(8000, () => {
  console.log(`Tu servidor está corriendo en el puerto: 8000`)
})
