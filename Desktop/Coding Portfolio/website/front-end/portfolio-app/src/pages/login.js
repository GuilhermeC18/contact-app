import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log('login function');
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ email, password}),
        }).then((resp) =>{
            if(!resp.ok){
                resp.json().then((json) => {
                    const error = new Error(json.message);
                    error.status = resp.status;
                });
            } else {
                history.push('/admin/dashboard');
            }
        })
    }


    return (
        <>
        <div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<label htmlFor='email'>Email: </label>
				<input
					type='email'
					placeholder='john@doe.com'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<br />
				<label htmlFor='password'>Password: </label>
				<input
					type='password'
					placeholder='Type your password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<br />

				<input type='submit' value='Login'></input>
			</form>
		</div>
        </>
    )

}