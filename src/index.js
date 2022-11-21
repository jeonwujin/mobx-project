import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // Mobx에서 사용하는 Provider
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from 'stores';

const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(
    <Provider {...root}>
        {/* *** ...root 으로 스토어 모두 자동으로 설정 */}
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
