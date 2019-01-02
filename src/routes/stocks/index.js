import React, { Component } from 'react';


export default class StockComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: ''
        };
    }
    
    handleFileInput = (event) => {
        console.log(event.target.files);
    }

    render() {
        return (
            <div>
                Stocks
                <form>
                    <div className="form-group relative">
                        <input type="file" onChange={this.handleFileInput} className="file-input" name="stock-file" id="stock-file" accept=".csv"
                            required />
                        <label htmlFor="stock-file">Upload file</label>
                    </div>
                </form>
            </div>
        )
    }
}
