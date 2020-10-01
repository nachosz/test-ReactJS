import React from 'react';
import Formulario from './Form';
//import Results from './Results';
//import './Home.scss';
import Button from 'react-bootstrap/Button';
import {Carousel,CarouselItem,CarouselCaption} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import {Container} from 'react-bootstrap';




class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies : [],
      movieName : null,
      apiKey: "apiKey"
    }
  
  this.getMovieName = this.getMovieName.bind(this);
  this.getMovieList = this.getMovieList.bind(this);

  }
  

  getMovieName(value){
    this.setState({movieName : value});
  }

  getMovieList(){
    
    if(this.state.movieName){
      
      let alerta = document.querySelector('#alerta');
      let carousel = document.querySelector('#calesita');
      alerta.className ='d-none'
      
      let url = "http://www.omdbapi.com/?s="+this.state.movieName+"&apikey="+this.state.apiKey;
      
      fetch(url)
      .then(result=>result.json())
      .then(result=>{
           

      if(result.Error){
      	console.log("Hubo un error en la búsqueda!");
      	alerta.className = 'fade alert alert-warning show d-block';
      	carousel.className = 'd-none';
      	this.setState({movies:[]});
      	
      	return;
      }
      

      let valores=result.Search;
      if(valores.length>15){
        valores.splice(15);
      }
      this.setState({movies:valores});
      
      carousel.className='d-block carousel slide';
      
      })
    }
  

  }


  render(){
    
    //render all the movie List in the Carousel   
    let {movies}=this.state;
    
    let result=movies.map((entry,index)=>{
      
      let link = "http://www.imdb.com/title/"+entry.imdbID;    
	  let srcImage = entry.Poster;
	  

	  if(entry.Poster=="N/A") {
	  	srcImage ='https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available-225x300.png';
	  	
	  } 	
      
      	console.log(entry.Poster);
	      return (
	      	<Carousel.Item key={index}>
	         
		        <img src = {srcImage}
		        className = "rounded mx-auto d-block"
		        alt = "Image Not Found"
		        />
		        
		        <Carousel.Caption >
		        	
		        	<span className = 'text-white bg-dark align-text-bottom'>{entry.Year} - <a href = {link}>VIEW ON IMDB</a></span>
		        </Carousel.Caption>
	        </Carousel.Item>)
    });


    return (
      <Container>
        <header>
          <h1><span>// </span> React challenge</h1>
          <p>Open readme.md</p>
        </header>
        <main>
          <h1>Search OMDB</h1>
          
          <Formulario sendMovieName={this.getMovieName}/>
      
          <Button variant = "primary mt-1 mb-1" onClick={this.getMovieList} type= "submit">Search</Button>
          
          <Alert id='alerta' variant='warning' className='d-none'>
           Película no encontrada
          </Alert>

          <Carousel id="calesita" className="d-none" >
          	{result}
          </Carousel>

        
        </main>
      
      </Container>
    );
  }
}

export default Home;


  