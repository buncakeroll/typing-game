import React from 'react';
const data = require('../../src/data.json');

class Text extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data.data,
			timeElapsed: 0,
			wpm: "0",
			minutes: 0,
			seconds: 0,
			displayTime: "00:00" 
		}
		this.startStopwatch = false;
		this.pressedBackspace = false;
		this.random = Math.floor(Math.random()*this.state.data.length);
		this.text = this.state.data[this.random].text;
		this.textArray = this.text.split(" ");
		this.sumWords =  this.textArray.length;
		this.index = 0;
		this.wordCount = 0;
		
		
		this.handleChange = this.handleChange.bind(this);
		this.displayTimeElapsed = this.displayTimeElapsed.bind(this);
	}

	displayTimeElapsed() {
		this.setState({
			timeElapsed: this.state.timeElapsed+1,
			seconds: ++this.state.seconds,
			displayTime: "0" + this.state.minutes + ":" + this.state.seconds 
		});

		if(this.wordCount>0) {
			this.setState({
				wpm: Math.floor(this.wordCount*(60/this.state.timeElapsed))
			});
			
		}

		if(this.state.timeElapsed >=60) {
			this.setState({
				minutes: this.state.minutes++,
                seconds: 0,
                wpm: this.state.wpm
            
            })
            alert("GAME OVER! Score") 
		}
		if(this.state.seconds<10) {
			this.setState({
				displayTime: 0 + this.state.minutes + ":0" + this.state.seconds
			});
		}
	}

	handleChange() {
		if (document.getElementById('btn-countdown'))
		{
			document.getElementById('type').value="";
			return;
		}

		if (!this.stopwatch)
			this.stopwatch = setInterval(this.displayTimeElapsed, 1000);

		var currWord = this.textArray[this.index];
		var typingFieldValue = document.getElementById('type').value;

		var lastWord = this.index >= this.textArray.length-1;

		if (typingFieldValue == (lastWord ? currWord : currWord + " ")) {
			this.letterIndex = 0;
			this.index++;
			this.wordCount++;
			document.getElementById('type').value = "";

			if (lastWord) {
				clearInterval(this.stopwatch);
			}
		}
        this.setState({});
        
      
	}


	render() {
		var paragraph = this.textArray;
		var correct = paragraph.slice(0, this.index).join(" ");
		if (this.index < this.textArray.length)
			correct += " ";
		var rest = this.index <= paragraph.length ? " " + paragraph.slice(this.index+1).join(" ") : "";


		var word = paragraph[this.index];

		var rightChar = "";
		var wrongChar = "";
		var letterRest = "";

		var typingField = document.getElementById('type');
		var input = typingField ? typingField.value : "";

		var incorrect = false;
		for(var i=0; word && i<word.length; i++) {
			if(input[i] == undefined) {
				letterRest += word[i];
			}
			else if(!incorrect && word[i] == input[i]) {
				rightChar += word[i];
			} 
			else {
				wrongChar += word[i];
				incorrect = true;
			}
		}

		return (
			<div id="text-excerpt">
					<div className="container">
						<p id="paragraph">
							<span className="right-char">{correct}</span>
							<span className="current-word">
								<span className="right-char">{rightChar}</span>
								<span className="wrong-char">{wrongChar}</span>
								{letterRest}
							</span>
							{rest}
						</p>
					</div>
				<input id="type" type="text" placeholder="Type here" autoFocus onChange={this.handleChange}/>
                <div className="results">
            	<p id="time-elapsed">1 Minute Timer: 
                <span className="box">
                {this.state.displayTime}
                </span>
                </p>
				<p id="wpm">Words per Minute: 
                <span className="box">
                {this.state.wpm}
                </span>
                </p>
                </div>
            </div>
		)
	}
}

export default Text;