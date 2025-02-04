import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Auth0Provider} from "@auth0/auth0-react";
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Auth0Provider
              domain={"dev-qiuv6qbqd6kdpwtr.us.auth0.com"} // your Auth0 tenant name.
              clientId={"o1Cx9jg0nZpUlScFLuCSo3FCm1bLRMhn"} //unique identifier for y
              scope="openid profile email"
              authorizationParams={{
                  redirect_uri: window.location.origin,
              }}
          >
                <App />
          </Auth0Provider>
      </BrowserRouter>
  </StrictMode>,
)
