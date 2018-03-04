import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
constructor(){
  super()
  this.state = {
    employees: []
  }
}

  componentDidMount(){
    axios.get('/employees')
    .then(response => {
      return response.data;
    })
    .then(data => {
      console.log('success');
      // console.log(data);
      this.setState({
        employees: data
      })
    })
    .catch(err => {
      console.error('error');
      console.error(err);
    });
  }

  render(){
    return(
      <div id="app">
      <ul>
        {
          this.state.employees.map( employee => (
            <li>{employee.name}</li>
          ))
        }
        </ul>
      </div>
    )
  }
}

export default App;
