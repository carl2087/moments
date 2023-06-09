import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { ProfileDataProvider } from './contexts/ProfileDataContext';

// the code below stops react router form rendering correctly

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<React.StrictMode>
// 		<Router>
// 			<App />
// 		</Router>
// 	</React.StrictMode>
// );

//the code below ensures react router renders the content you want

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Router>
		<CurrentUserProvider>
		<ProfileDataProvider>
			<App />
		</ProfileDataProvider>
		</CurrentUserProvider>
	</Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
