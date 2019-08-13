import React from 'react';
import './Main.css';

// import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';


export default function Main({ match }){
    return (
        <div className="main-container">
            <img src={logo}  alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""></img>
                    <footer>
                        <strong>Diego</strong>
                        <p>Teste teste teste</p>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="button">
                                <img src={like} alt="Like"/>
                            </button>
                        </div>
                    </footer>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""></img>
                    <footer>
                        <strong>Diego</strong>
                        <p>Teste teste teste</p>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="button">
                                <img src={like} alt="Like"/>
                            </button>
                        </div>
                    </footer>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""></img>
                    <footer>
                        <strong>Diego</strong>
                        <p>Teste teste teste</p>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="button">
                                <img src={like} alt="Like"/>
                            </button>
                        </div>
                    </footer>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""></img>
                    <footer>
                        <strong>Diego</strong>
                        <p>Teste teste teste</p>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="button">
                                <img src={like} alt="Like"/>
                            </button>
                        </div>
                    </footer>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""></img>
                    <footer>
                        <strong>Diego</strong>
                        <p>Teste teste teste</p>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="button">
                                <img src={like} alt="Like"/>
                            </button>
                        </div>
                    </footer>
                </li>
            </ul>        
        </div>
    );
}
