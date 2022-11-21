import React, { Component } from 'react';
import ShopItem from 'components/ShopItem';
import { inject, observer } from 'mobx-react'; // 불러오기

const items = [
    {
        name: '생수',
        price: 850,
    },
    {
        name: '신라면',
        price: 900,
    },
    {
        name: '포카칩',
        price: 1500,
    },
    {
        name: '새우깡',
        price: 1000,
    },
];

@inject(({ market }) => ({ onPut: market.put }))
@observer
class ShopItemList extends Component {
    render() {
        const { onPut } = this.props;

        const itemList = items.map((item) => <ShopItem {...item} key={item.name} onPut={onPut} />);

        return <div>{itemList}</div>;
    }
}

export default ShopItemList;
