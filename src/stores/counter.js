import { observable, action, computed } from 'mobx';

export default class CounterStore {
    @observable number = 1;

    constructor(root) {
        this.root = root;
    }

    @action
    increase = () => {
        this.number++;
    };

    @action
    decrease = () => {
        this.number--;
    };

    // computed 함수 내부에 포함된 값(observable으로 지정한 값)이 변할때마다 실행
    @computed
    get total() {
        return this.number * this.number;
    }
}
