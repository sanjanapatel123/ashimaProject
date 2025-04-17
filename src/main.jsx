// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import "remixicon/fonts/remixicon.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App></App>
//   </StrictMode>
// );

// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; 
import { store } from "./components/Redux/store.js";     
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>             
      {/* <BrowserRouter>                     */}
        <App />
      {/* </BrowserRouter> */}
    </Provider>
   
);

