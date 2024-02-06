import { Card } from '../Components/Card'
import { useContext } from 'react'
import { ProductosContext } from '../Context/ProductoContext'
import { CarritoContext } from '../Context/CarritoContext'

export const ComprasScreen = () => {

        const { productos } = useContext(ProductosContext)

        const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

        const handleAgregar = (compra) =>{ 
                agregarCompra(compra)
        }
        const handleQuitar = (id) =>{
                eliminarCompra(id)
        }
        return (
                <>
                        <h1>Compras: </h1>
                        <hr />

                        {productos.map(producto => (

                                <Card
                                        key={producto.id}
                                        imagen={producto.image}
                                        titulo={producto.title}
                                        descripcion={producto.description}
                                        precio={producto.price}
                                        handleAgregar={() => handleAgregar(producto)}
                                        handleQuitar={() => handleQuitar(producto.id)}

                                ></Card>


                        ))}

                </>
        )
}
