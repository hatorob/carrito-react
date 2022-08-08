import { Component } from "react";
import Producto from './Producto';

const styles = {
    productos: {
        display: 'flex', //para manipular más facil el contenido y centrar u orientar como deseamos
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props;


        return(
            <div style={styles.productos}>
                {productos.map(producto => 
                 <Producto
                    agregarAlCarro={agregarAlCarro}
                    key={producto.name}
                    producto={producto}
                 />)}
            </div>
        );
    }
}


export default Productos;