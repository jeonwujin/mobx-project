import React, { Component } from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

class SuperMarket extends Component {
    render() {
        return <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} total={<TotalPrice />} />;
    }
}

export default SuperMarket;
