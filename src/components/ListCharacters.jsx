import React, { Component } from 'react';
import Card from './Card';

export default class ListCharacters extends Component {

    constructor(props){
        super(props);

        this.state = {
            characters: [],
            pageNum: 1
        }
    }

   fetchApi = async () =>  {
    let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.pageNum}`)
    let data = await response.json()

    //console.log(data.results);

    this.setState({ 
        characters: [...data.results]})
   } 


   componentDidMount() {
    this.fetchApi();
   }
   

   changePage = (prop) =>{
    this.setState({ 
      pageNum: prop
    })
    this.fetchApi();
   }

   componentDidUpdate(prevProps, prevState){
    if(prevProps.conteo !== this.props.conteo){
      this.changePage(this.props.conteo);
  }
  }

  render() {

    //console.log(this.state.characters)

    return (
      //<div>Hola desde componente de clase ListCharacters</div>
      this.state.characters.map((pj, index)=>{
        return <Card key={index}{...pj}/>
      })
    )
  }
}
