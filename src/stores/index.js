import CounterStore from './counter';
import ResetStore from './reset';
import MarketStore from './market';

class RootStore {
    constructor() {
        this.counter = new CounterStore(this);
        this.reset = new ResetStore(this);
        this.market = new MarketStore(this);
    }
}
export default RootStore;
