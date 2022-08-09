import { Component } from "react";

const styles = {
    detallesCarro: {
        background: '#fff',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    },
    span: {
        background: 'rgb(233, 114, 90)',
        border: 'none',
        borderRadius: '15px',
        width: 25,
        height: 25,
        textAlign: 'center',
        color: 'white'
    } 
}

class DetallesCarro extends Component {
    render() {
        const {carro} = this.props;
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map( x => 
                    <li style={styles.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width='50' height='32'></img>
                        {x.name}
                        <span style={styles.span}>  {x.cantidad}</span> 
                    </li>)}
                </ul>
            </div>
        );
    }
}


export default DetallesCarro;