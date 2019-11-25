import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
//import App from 'Components/App' 이렇게 해도 작동. .env에서 설정했기 때문 
import "./api";
ReactDOM.render(<App />, document.getElementById('root'));
