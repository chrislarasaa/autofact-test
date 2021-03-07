import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Quiz extends Component {
    state = {};

    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.post("http://127.0.0.1:8000/api/user", '', config).then(response => {
            this.setState({
                user: response.data
            })
        }, err => {
            console.log(err);
        })

        axios.get("http://127.0.0.1:8000/api/quiz", config).then(response => {
            this.setState({
                quiz: response.data
            })
        }, err => {
            console.log(err);
        })

    }

    handleChange = async e => {

        await this.setState({
            answer: {
                ...this.state.answer, [e.target.name]: e.target.value
            }
        });

    }

    EnviarRespuestas = async () => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }

        await axios.post("http://127.0.0.1:8000/api/logs", {
            user_id: this.state.user.user.id,
            quiz_id: this.state.quiz[0].id,
            answer: this.state.answer.quiz1
        }, config).then(response => {
            return response;
        }, err => {
            console.log(err);
        })

        await axios.post("http://127.0.0.1:8000/api/logs", {
            user_id: this.state.user.user.id,
            quiz_id: this.state.quiz[1].id,
            answer: this.state.answer.quiz2
        }, config).then(response => {
            return response;
        }, err => {
            console.log(err);
        })

        await axios.post("http://127.0.0.1:8000/api/logs", {
            user_id: this.state.user.user.id,
            quiz_id: this.state.quiz[2].id,
            answer: this.state.answer.quiz3
        }, config).then(response => {
            return response;
        }, err => {
            console.log(err);
        })

        alert("Respuestas guardadas satisfactoriamente");
    }

    render() {
        if (this.state.user) {
            return (
                <div className="containerPrincipal">
                    <h2>Hola {this.state.user.user.name}</h2>
                    <div className="containerSecundario">
                        <div className="form-group">
                            <label>¿Que te gustaria que agregaramos al informe?</label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="quiz1"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label>¿La informacion es correcta?</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="quiz2" id="inlineRadio2" value="Si" onChange={this.handleChange} />
                                <label className="form-check-label" >Si</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="quiz2" id="inlineRadio2" value="No" onChange={this.handleChange} />
                                <label className="form-check-label" >No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="quiz2" id="inlineRadio2" value="Mas o Menos" onChange={this.handleChange} />
                                <label className="form-check-label">Mas o Menos</label>
                            </div>
                            <br /><br />
                            <label>¿Del 1 al 5, es rapido el sitio?</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="quiz3" id="inlineRadio2" value="1" onClick={this.handleChange} />
                                <label className="form-check-label" >1</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="quiz3" id="inlineRadio2" value="2" onClick={this.handleChange} />
                                <label className="form-check-label" >2</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="quiz3" id="inlineRadio2" value="3" onClick={this.handleChange} />
                                <label className="form-check-label" >3</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="quiz3" id="inlineRadio2" value="4" onClick={this.handleChange} />
                                <label className="form-check-label" >4</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="quiz3" id="inlineRadio2" value="5" onClick={this.handleChange} />
                                <label className="form-check-label" >5</label>
                            </div>
                            <br />
                            <br />
                            <button className="btn btn-primary" onClick={() => this.EnviarRespuestas()}>Enviar Respuestas</button>
                        </div>
                    </div>
                </div>
            );
        }else{
            return ""
        }
        
        

    }
}

export default Quiz;