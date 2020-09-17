import React, {Component} from 'react'

export default class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState;

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  onFormSubmit = (event) => {
   
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, job } = this.state;
  
    return (
      <form>
        <div class="form-group">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={name}
                onChange={this.handleChange} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                className="form-control"
                id="job"
                value={job}
                onChange={this.handleChange} />
        </div>

        <input type="button" value="Submit" onClick={this.onFormSubmit} className="btn btn-success btn-sm"/>
      </form>
    );
  }
  


}