import {Link as L } from 'react-router-dom'
export default function Form(st){
    return(
        <>
            <h1>{st.name2}</h1>

            
            
            <div className="login">
                <label htmlFor="n">Name</label>
                <input type="text" id='n' placeholder='Nome' />
                <br />
                <label htmlFor="s">Senha</label>
                <input type="password" placeholder='Senha' />

                <div className="button">
                    <button>Login</button>
                    <button>Criar N</button>
                </div>
            </div>

        </>
    )
}