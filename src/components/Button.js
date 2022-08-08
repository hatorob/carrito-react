import { Component } from "react";

const styles = {
    btn: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        background: 'green',
        color: 'white',
        cursor: 'pointer'
    }
}

class Button extends Component {
    render() {
        return(
            <button style={styles.btn} {...this.props}/>
        );  
    }
}

export default Button;