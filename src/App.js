import React, { Component } from 'react';
import './App.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        isOn: false,
        seconds: 0,
        minutes: 0,
        min: '',
        time: 0,
        toggle: 'Start',
        success: false,
        home: '',
        homeResult: 0,
        away: '',
        awayResult: 0
    }

    this.toggleTime = this.toggleTime.bind(this);
}

setMinutes = (e) => {
  this.setState({
    minutes: e.target.value
  })
};

setSeconds = (e) => {
  this.setState({
    seconds: e.target.value
  })
};

homeIncrement = () => {
  this.setState((prevState) => ({
      homeResult: prevState.homeResult + 1
  }));
}

homeDecrement = () => {
  this.setState((prevState) => ({
      homeResult: prevState.homeResult - 1
  }));
}

awayIncrement = () => {
  this.setState((prevState) => ({
      awayResult: prevState.awayResult + 1
  }));
}

awayDecrement = () => {
  this.setState((prevState) => ({
      awayResult: prevState.awayResult - 1
  }));
}

setHome = (e) => {
  this.setState({
      home: e.target.value
  })
};

setAway = (e) => {
  this.setState({
      away: e.target.value
  })
};

submit = e => {
  e.preventDefault();
if (this.state.home !== '' && this.state.away !== '') {
  console.log("no to wysylam", this.state);
  this.setState({
      success: true
  })
}
};

toggleTime = () => {
  if(this.state.isOn === false) {
      this.sec = setInterval(() => {
          this.setState((prevState) => ({
              seconds: prevState.seconds + 1,
          }));
      }, 1000)

      this.min = setInterval(() => {
          this.setState((prevState) => ({
              minutes: prevState.minutes + 1
          }));
      }, 60000)
      this.setState((prevState) => ({
          isOn: true,
          toggle: 'Stop'
      }));
  } else {
      this.setState((prevState) => ({
          isOn: false,
          toggle: 'Start'
      }));
      clearInterval(this.sec)
      clearInterval(this.min)
  }
};

reset = () => {
  this.setState((prevState) => ({
      isOn: false,
      seconds: 0,
      minutes: 0
  }));
}

  render() {
    return (
      <div className="app">
        {/* <Timer />
        <Scoreboard /> */}

        <div className="board">
          <div className="timer">
            {`0${this.state.minutes}`.slice(-2)}:{`0${this.state.seconds%60}`.slice(-2)}
          </div>

          <div className="scoreBoard">
              <div className="teamName home">{this.state.home}</div>
              <div className="result">{this.state.homeResult}</div>
                :
              <div className="result">{this.state.awayResult}</div>
              <div className="teamName away">{this.state.away}</div>
          </div>
        </div>

        <div className="controls">
          <div className="timeControls box">
            <h3>Czas</h3>
            <button onClick={this.toggleTime} className="btn">{this.state.toggle}</button>
            <button onClick={this.reset} className="btn">Reset</button>

            <form onSubmit={this.submit}>
              <h3>Wprowadź czas</h3>
              <input type="text" placeholder="wpisz minuty" onChange={this.setMinutes} value={this.state.minutes} />
              <input type="text" placeholder="wpisz sekundy" onChange={this.setSeconds} value={this.state.seconds} />
            </form>
          </div>
          <div className="resultControls box">
            <div className="box-inner">
              <h3>Gospodarze</h3>
              <button onClick={this.homeIncrement} className="btn">+</button>
              <button onClick={this.homeDecrement} className="btn">-</button>
            </div>
            <div className="box-inner">
              <h3>Goście</h3>
                <button onClick={this.awayIncrement} className="btn">+</button>
                <button onClick={this.awayDecrement} className="btn">-</button>
            </div>
          </div>
          <div className="teamsControls box">
            <form onSubmit={this.submit}>
              <h3>Nazwy drużyn</h3>
              <input type="text" placeholder="3 inicjały gospodarza" onChange={this.setHome} value={this.state.home} />
              <input type="text" placeholder="3 inicjały gościa" onChange={this.setAway} value={this.state.away} />
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
