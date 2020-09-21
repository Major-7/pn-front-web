import React, { Component } from 'react';
import "../css/master.css"
export default class Reset extends Component {
    render() {
        return (
            <div className="div-container">
                <div className="img-container"></div>
                <div className="div-right-container">
                    <h1>Reset Password</h1>
                    <form>
                        <label className="labelEmail" for="emailField">Password</label>
                        <input type="password" id="emailField" className="inp-field"></input>    
                        <label className="labelEmail" for="emailField">Confirm Password</label>
                        <input type="password" id="emailField" className="inp-field"></input>
                        <input type="submit" className="btn-field" value="SUBMIT"/>
                    </form>
                </div>
            </div>
        )
    }
}
