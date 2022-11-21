import { action, computed, observable } from 'mobx';

export default class MarketStore {
    @observable selectedItems = [];

    constructor(root) {
        this.root = root;
    }

    @action
    put = (name, price) => {
        const { number } = this.root.counter;

        // 존재하는지 먼저 찾는다
        const exists = this.selectedItems.find((item) => item.name === name);
        if (!exists) {
            // 존재하지 않으면 넣는다.
            this.selectedItems.push({
                name,
                price,
                count: number,
            });
        } else {
            exists.count += number;
        }
    };

    @action
    take = (name) => {
        const itemToTake = this.selectedItems.find((item) => item.name === name);
        itemToTake.count--;

        // 갯수가 0 이면 배열에서 제거 처리
        if (itemToTake.count === 0) {
            this.selectedItems.remove(itemToTake);
        }
    };

    @computed
    get total() {
        console.log('총합 계산...');
        return this.selectedItems.reduce((previous, current) => {
            return previous + current.price * current.count;
        }, 0);
    }
}
