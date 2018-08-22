import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class GifGif extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picked: '',
            reason: '',
            name: '',
            votes: JSON.parse(props.votes),
        }
    }

    addVote() {
        const { picked, reason, name } = this.state;

        axios.post('/api/votes', { picked, reason, name })
            .then(() => {
                this.setState({
                    votes: this.state.votes.concat({ picked, reason, name }),
                    picked: '',
                    reason: '',
                    name: '',
                });
            });
    }

    isValid() {
        return ! this.state.picked || ! this.state.reason || ! this.state.name;
    }

    renderVotes() {
        return this.state.votes.map((vote, i) => {
            return (
                <li className="py-4" key={i}>
                    <p><span className="font-light uppercase">gif</span> — { vote.reason }</p>
                    <p className="text-sm mt-2">Submitted by <span className="uppercase">{ vote.name }</span></p>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <div className="bg-white rounded shadow text-grey-darker">
                    <div className="py-8">
                        <h3 className="text-center">How do you pronounce the word <span className="font-light uppercase">gif</span>?</h3>

                        <div className="flex justify-center py-8">
                            <label htmlFor="jif" className="mx-4">
                                GIF
                            </label>

                            <input type="radio" id="jif"
                                   onClick={() =>{ this.setState({ picked: 'jif' })}}
                                   checked={ this.state.picked === 'jif' }
                                   className="mr-4" />

                            <label htmlFor="gif" className="mx-4">
                                GIF
                            </label>

                            <input type="radio"
                                   id="gif"
                                   onClick={() =>{ this.setState({ picked: 'gif' })}}
                                   checked={ this.state.picked === 'gif' } />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-3/4">
                            <input className="input"
                                   id="reason"
                                   type="text"
                                   value={ this.state.reason }
                                   onChange={ (e) => { this.setState({ reason: e.target.value })}}
                                   placeholder="Why do you think it should be pronounced that way?" />
                        </div>
                    </div>

                    <div className="flex justify-center my-4">
                        <div className="w-3/4">
                            <input className="input"
                                   id="name"
                                   type="text"
                                   value={ this.state.name }
                                   onChange={ (e) => { this.setState({ name: e.target.value })}}
                                   placeholder="What is your name?" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button id="submit"
                                onClick={() => { this.addVote() }}
                                disabled={ this.isValid() }
                                className={ `button ${ this.isValid() ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            Submit
                        </button>
                    </div>
                </div>

                <div className="py-8">
                    <h4 className="text-grey-darker text-center">User Responses:</h4>
                    <ul>
                        { this.renderVotes() }
                    </ul>
                </div>
            </div>
        );
    }
}

export default GifGif;

let el;

if (el = document.getElementById('gif-gif')) {
    ReactDOM.render(<GifGif { ...el.dataset} />, el);
}
