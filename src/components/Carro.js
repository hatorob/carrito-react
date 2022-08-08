import { Component } from "react";
import BubbleAlert from './BubbleAlert'

 const styles = {
    carro: {
        background: '#359A2C',
        color: 'white',
        border: "none",
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '15px'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
 }

class Carro extends Component {
    render() {
        return(
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value={2}/>
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        );
    }
}

export default Carro;