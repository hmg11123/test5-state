import React from "react";
import "./styles/main.css";
import Circular from "./components/Circular";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberValue: "",
      i: false,
      a: "=",
      b: [],
      c: false
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        i: true
      });
    }, 2000);
  }

  render() {
    const { numberValue, i } = this.state;

    return (
      <div className="main">
        <div className="header">
          <input type="text" value={numberValue} />;
        </div>
        {i ? (
          <div className="content">
            <div>
              <input
                type="button"
                value="1"
                onClick={() => this._btnHandler("1")}
              />
              <input
                type="button"
                value="2"
                onClick={() => this._btnHandler("2")}
              />
              <input
                type="button"
                value="3"
                onClick={() => this._btnHandler("3")}
              />
              <input
                type="button"
                value="+"
                onClick={() => this._btnHandler("+")}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={() => this._btnHandler("4")}
              />
              <input
                type="button"
                value="5"
                onClick={() => this._btnHandler("5")}
              />
              <input
                type="button"
                value="6"
                onClick={() => this._btnHandler("6")}
              />
              <input
                type="button"
                value="-"
                onClick={() => this._btnHandler("-")}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={() => this._btnHandler("7")}
              />
              <input
                type="button"
                value="8"
                onClick={() => this._btnHandler("8")}
              />
              <input
                type="button"
                value="9"
                onClick={() => this._btnHandler("9")}
              />
              <input
                type="button"
                value="*"
                onClick={() => this._btnHandler("*")}
              />
            </div>
            <div>
              <input
                type="button"
                value="."
                onClick={() => this._btnHandler(".")}
              />
              <input
                type="button"
                value="0"
                onClick={() => this._btnHandler("0")}
              />
              <input type="button" value="=" onClick={this._btnHandlervalue} />
              <input
                type="button"
                value="/"
                onClick={() => this._btnHandler("/")}
              />
            </div>
            <div>
              <input
                type="button"
                value="clear"
                onClick={this._btnHandlerdel2}
              />
              <input type="button" value="del" onClick={this._btnHandlerdel1} />
            </div>
          </div>
        ) : (
          <Circular />
        )}
      </div>
    );
  }

  /*
    numberValue의 마지막 한 문자를 제거
    첫번째 부터 numberValue의 length - 1 까지 가져온다.
    
  */

  _btnHandler = value => {
    this.setState({
      numberValue: this.state.numberValue + value
    });
  };

  _btnHandlerdel1 = c => {
    const numberValue = this.state.numberValue.substring(
      0,
      this.state.numberValue.length - 1
    );

    this.setState({
      numberValue: numberValue
    });

    // this.setState({
    //   numberValue: numberValue
    // });

    // const numberValue = this.state.numberValue(
    //   0,
    //   this.state.numberValue.length - 1
    // );
    // this.setState({
    //   numberValue: numberValue
    // });

    // const numberValue = this.state.numberValue.substring(
    //   0,
    //   this.state.numberValue.length - 1
    // );
    // this.setState({
    //   numberValue: numberValue
    // });
  };

  _btnHandlerdel2 = () => {
    this.setState({
      numberValue: ""
    });
  };

  _btnHandlervalue = () => {
    this.setState({
      // eval 문자를 코드로 계산하는거
      // 걍 string => number => 계산
      numberValue: eval(this.state.numberValue)
    });
  };
}

export default App;
// _btnHandlerTest = () => {
//   for (var i = 10; i < 10; i++) {
//     this.setState({
//       numberValue: this.state.numberValue + i
//     });
//   }
// };
