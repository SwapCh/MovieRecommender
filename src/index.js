/*import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//756d0c46

ReactDOM.render(<App />, document.getElementById("root"));*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming App is your main component

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(<App />);


