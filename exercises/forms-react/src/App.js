import React from "react";
import Soda from "./components/Soda";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteSoda: ""
        }
        this.sodaPartyClick = this.sodaPartyClick.bind(this);
        this.sodaPartyChange = this.sodaPartyChange.bind(this);

    }

    sodaPartyClick() {
      this.setState(prevState => {
        return {
          label: prevState.favoriteSoda
        }
      });
    }

    sodaPartyChange(event) {
      this.setState({
        favoriteSoda: event.target.value
      });
    }

    render() {
        return (
            <div>
                <Soda label={this.state.label}
                      value={this.state.favoriteSoda}
                      handleClick={this.sodaPartyClick}
                      handleChange={this.sodaPartyChange}
                />
            </div>
        )
    }
}

export default App;
