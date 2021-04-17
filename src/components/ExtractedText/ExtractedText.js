import React, { Component } from 'react';
import extractSiteContent from '../../../utils/htmlextractor';

class ExtractedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'tbd',
    };
  }

  render() {
    const { text } = this.state;
    return (
      <div className="extractedtext">
        <p>{text}</p>
      </div>
    );
  }

  componentDidMount() {
    extractSiteContent(
      'https://www.br.de/nachrichten/wissen/corona-was-bringen-naechtliche-ausgangssperren-possoch-klaert,SUkDPlW',
      (txt) => {
        this.setState({
          text: txt,
        });
      }
    );
  }
}

export default ExtractedText;
