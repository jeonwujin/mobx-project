import React, { Component } from 'react';
import './ShopItem.css';

class ShopItem extends Component {
    render() {
        const { name, price, onPut } = this.props;

        return (
            <div className="ShopItem" onClick={() => onPut(name, price)}>
                <h4>{name}</h4>
                <div>{price}원</div>
            </div>
        );
    }
}

export default ShopItem;
