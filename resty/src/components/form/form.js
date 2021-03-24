import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      urls: [],
      methods: [],
    };
  }

  addURL = () => {
    this.setState({
      urls: [...this.state.urls, this.state.input],
      methods: [...this.state.methods, this.state.method],
    });
  }

  selectionChange = (e) => {
    this.setState({ input: e.target.value });
  }

  changeMethod = (e) => {
    this.setState({ method: e.target.value });
  }

  render() {
    return (

      <section className="App-form">

        <form>

          <label>Please enter a route: </label>
          <input onChange={this.selectionChange} type='text' value={this.state.input} />
          <button type="button" onClick={this.addURL}>Click Me</button>

          <div id="methods">
            <div className="restButtons">
              <label>
                <input onChange={this.changeMethod} name="method" type="radio" value="GET" />
                <span>GET</span>
              </label>
            </div>

            <div className="restButtons">
              <label>
                <input onChange={this.changeMethod} name="method" type="radio" value="POST" />
                <span>POST</span>
              </label>
            </div>

            <div className="restButtons">
              <label>
                <input onChange={this.changeMethod} name="method" type="radio" value="PUT" />
                <span>PUT</span>
              </label>
            </div>

            <div className="restButtons">
              <label>
                <input onChange={this.changeMethod}  name="method" type="radio" value="DELETE" />
                <span>DELETE</span>
              </label>
            </div>
          </div>
        </form>

        <article>

          <ul className="methodSelection">
            {this.state.methods.map((method) => <li>{method}</li>)}
          </ul>

          <ul className="urlSelection">
            {this.state.urls.map((url) => <li>{url}</li>)}
          </ul>

        </article>

      </section>
    );
  }
}

export default Form;