import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// const theme =CreateTheme({
//     palette:{
//         primary:{
//             main: '#61dafb'
//         },
//         secodary:{
//             main: '#da61fb'
//         }
//     }
// })
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);