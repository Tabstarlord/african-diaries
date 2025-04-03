import React from 'react'
import '../Styles/Search.css'
import searchBar from '../Assets/Vector.png'
class Search extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch(`http://localhost:3000`)
    .then(response => { if (!response.ok) {} 
        return response.json()
      })
    .then(data => {
      console.log("Data before filter:", data);
      const { query } = this.state;
      const filteredData = data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({
        data,
        filteredData
      });
    });
  };

  UNSAFE_componentWillMount() {
    this.getData();
  }

render() {
  return (
    <>
    <div className='mobile-search'>
    <div className='searchForm'>
      <form>
        <input placeholder='Search for...' value={this.state.query} onChange={this.handleInputChange} />
        <button onSubmit={this.handleInputChange}><img src={searchBar} alt='search' /></button>
      </form>
      <div>{this.state.filteredData.map(i => <p>{i.name} </p>)}</div>
    </div>
    </div>

    <div className='desktop-search'>
    <div className='searchForm'>
      <form>
        <input placeholder='Search for...' value={this.state.query} onChange={this.handleInputChange} />
        <button onSubmit={this.handleInputChange}><img src={searchBar} alt='search' /></button>
      </form>
      <div>{this.state.filteredData.map(i => <p>{i.name} </p>)}</div>
    </div>
    </div>
    </>
  )
}
}
export default Search