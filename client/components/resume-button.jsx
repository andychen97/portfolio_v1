import React from 'react';

export default class ResumeButton extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    fetch('resume.pdf')
      .then(response => {
        response.blob()
          .then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            const alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Andy_Chen_Resume.pdf';
            alink.click();
          });
      });
  }

  render() {
    return (
      <button type='submit' onClick={this.onButtonClick}>Resume</button>
    );
  }
}
