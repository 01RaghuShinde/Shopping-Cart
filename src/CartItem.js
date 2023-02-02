import React from 'react';
import './index.css';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            
        }
    }


    increaseQuantity = () => {
        // this.state.qty +=1;
        console.log(this.state);
        this.setState({qty:this.state.qty + 1});
    }

    decreaseQuantity = () => {
        // this.state.qty +=1;
        console.log(this.state);
        this.setState({qty:this.state.qty - 1});
    }

    render(){
        const {price,title,qty}= this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                    
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Price : {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>
                </div>
                <div className="cart-item-actions">
                    {/*Buttons */}
                    <img alt='increase' 
                    className='action-icons' 
                    onClick={this.increaseQuantity}
                    src='https://cdn-icons-png.flaticon.com/512/992/992651.png'/>

                    <img alt='decrease'
                    className='action-icons'
                    onClick={this.decreaseQuantity}
                    src='https://cdn-icons-png.flaticon.com/512/992/992683.png'/>

                    <img alt='delete' 
                    className='action-icons' 
                    onClick={this.deleteQuantity}
                    src='https://cdn-icons-png.flaticon.com/512/3405/3405244.png'/>
                </div>
            </div>

        );
    }
}

const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:"#ccc"
    }
}
export default CartItem;