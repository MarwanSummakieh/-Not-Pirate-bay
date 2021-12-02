import React, { useState } from "react";
import AzureAuthenticationButton from "./azure/azure-authentication-component";
import { AccountInfo } from "@azure/msal-browser";
import "./App.css";

function App() {
  // current authenticated user
  const [currentUser, setCurrentUser] = useState<AccountInfo>();

  // authentication callback
  const onAuthenticated = async (userAccountInfo: AccountInfo) => {
    setCurrentUser(userAccountInfo);
  };

  const ShowPermissionRevokeLinks = () => {
    return (
    <span id="name">
    {currentUser?.username}
    </span>
    );
};

return (
  <div id="App">
    <span>
      <div>      
      <span id="ms-button"><AzureAuthenticationButton id="button" onAuthenticated={onAuthenticated} /></span>
      <ShowPermissionRevokeLinks />
      </div>
    </span>
    
  </div>
);
}

export default App;
