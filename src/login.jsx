import Logged_in_page from "./logged_in_page";
import Skipped_loggin_page from "./skipped_login_page";






function skip(){
    document.getElementById("loggin_page").style.display = none;
    return <Skipped_loggin_page/>;
}

function Login(){
    
    return(
        <section id="loggin_page">
            <h1>Login or skip</h1>
            <button>Login</button>
            <button onClick={skip}>Skip</button>
        </section>
    )

}

export default Login;