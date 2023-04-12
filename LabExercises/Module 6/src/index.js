import React from 'react';
import ReactDOM from 'react-dom/client'; //ReactDOM importing
// import PortalApp from './PortalApp';
 import CalcEmoji from './CalcEmoji';
//import './index.css'; //CSS importing
import Calculator from './Calculator'; //what functions are imported from which App
import Emoji from './Emoji';
import Exercise1 from './Exercise2';
import App from './Appex1';
// import OnHover from './onHover';

  
//   const root = ReactDOM.createRoot(document.getElementById('root')); 
//   root.render(<MemoComp/>);

const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<CalcEmoji/>);

//   export default React.memo(MemoComp)