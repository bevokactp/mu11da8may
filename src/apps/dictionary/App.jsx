
import { useEffect, useRef, useState } from "react"; 
import React, { Component } from "react";

import {ppp} from '../mu11da8may_js/src/debug'


const DICTIONARY_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            data: "",
            searchWord: "",
        }
    }
    
    getMeaning = (e) => {
        if (this.state.searchWord) {
            fetch(`${DICTIONARY_URL}${this.state.searchWord}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data[0],
                })
            })
            .catch(error => {
                ppp('Fetch error:', error);
            });
        }
    }

    playAudio = () => {
        let audio = new Audio(this.state.data.phonetics[0].audio);
        audio.play();
    }

    changeSearchWord = (e) => {
        this.setState({
            searchWord: e.target.value,
        })
    }

    render() {
        return (
        <div>
            <div>
                <input type="text" onChange={this.changeSearchWord} />
                <button onClick={() => { this.getMeaning(); }}>+++++++</button>
            </div>
            {this.state.data && (
            <div>
                <h2>
                    {this.state.data.word}{" "}
                    <button onClick={() => { this.playAudio(); }}>000000000</button>
                </h2>
                <h4>Parts of speech:</h4>
                <p>{this.state.data.meanings[0].partOfSpeech}</p>
                <h4>Definition:</h4>
                <p>{this.state.data.meanings[0].definitions[0].definition}</p>
                <h4>Example:</h4>
                <p>{this.state.data.meanings[0].definitions[0].example}</p>
            </div>
            )}
        </div>
        );
    }
}
