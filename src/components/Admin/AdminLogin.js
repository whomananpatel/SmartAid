import React from "react";
import * as Components from './AdminLoginComponents';
import "./admin-style.css";
function AdminLogin() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Components.Container>
            <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Administrator Login</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>
         </Components.Container>
     )
}

export default AdminLogin;