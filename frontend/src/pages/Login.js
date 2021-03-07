import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Login extends Component {
    state = {
        form: {
            email: '',
            password: ''
        }
    }

    handleChange = async e => {

        await this.setState({
            form: {
                ...this.state.form, [e.target.name]: e.target.value
            }
        });

    }

    iniciarSesion = async () => {
        const json = {
            email: this.state.form.email,
            password: this.state.form.password
        }
        console.log(json)
        const res = await axios.post('http://127.0.0.1:8000/api/login/', json, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token)
            window.location.href="/"
        }).catch((error) => {
            console.log(error)
            alert("Usuario o contraseña incorrectos.");
        });

        console.log(res)

    }

    render() {
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label>Contraseña: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;