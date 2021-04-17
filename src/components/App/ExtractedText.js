import React, { Component } from 'react';
import extractSiteContent from '../../utils/htmlextractor'

class ExtractedText extends Component {


    constructor(props) {
        super(props);
        this.state = {
            text: "tbd"
        };
    }


    render() {
        const {text} =  this.state;
        return (
            <div className="extractedtext">
                <p>
                    {text}
                </p>

            </div>
        );
    }


    componentDidMount() {

        extractSiteContent("https://www.br.de/nachrichten/deutschland-welt/laschet-oder-soeder-entscheidung-in-der-k-frage-rueckt-naeher,SUm1KfA", (txt) => {
            this.setState({
                text: txt
            });
        });
    }
}



export default ExtractedText;
