import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class GifGif extends Component {
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
                            <input type="radio" id="jif" value="jif" name="pronunciation" className="mr-4" />

                            <label htmlFor="gif" className="mx-4">
                                GIF
                            </label>
                            <input type="radio" id="gif" value="gif" name="pronunciation" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-3/4">
                            <input className="input"
                                   id="reason"
                                   type="text"
                                   placeholder="Why do you think it should be pronounced that way?" />
                        </div>
                    </div>

                    <div className="flex justify-center my-4">
                        <div className="w-3/4">
                            <input className="input"
                                   id="name"
                                   type="text"
                                   placeholder="What is your name?" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button id="submit"
                                onClick="add"
                                className="button">
                            Submit
                        </button>
                    </div>
                </div>

                <div className="py-8">
                    <h4 className="text-grey-darker text-center">User Responses:</h4>
                    <ul>
                        <li className="py-4">
                            <p><span className="font-light uppercase">gif</span> — </p>
                            <p className="text-sm mt-2">Submitted by <span className="uppercase"> It is the way the creator of the format wanted!</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GifGif;

if (document.getElementById('gif-gif')) {
    ReactDOM.render(<GifGif />, document.getElementById('gif-gif'));
}
