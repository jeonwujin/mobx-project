import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import BasketItem from './BasketItem';

@inject(({ market }) => ({ items: market.selectedItems, onTake: market.take }))
@observer
class BasketItemList extends Component {
    render() {
        const { items, onTake } = this.props;

        const itemList = items.map((item) => <BasketItem item={item} key={item.name} onTake={onTake} />);

        return <div>{itemList}</div>;
    }
}

export default BasketItemList;
