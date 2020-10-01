import React,{Component} from 'react';
import {Carousel,CarouselItem,CarouselCaption} from 'react-bootstrap';

class Results extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
      movieList : [],
      
    }

  }




  render(){
   
    
     console.log(this.state.movieList);
        
    let {movieList}=this.state;
    
    let result=movieList.map((entry,index)=>{
      
      let link = "http://www.imdb.com/title/"+entry.imdbID;    
      let srcImage = entry.Poster;
    

      if(entry.Poster=="N/A") {
        srcImage ='https://via.placeholder.com/300x444';
      }   
              
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
    console.log(result);
  return (<div>{result}</div>)





      
      
      
      

  }

  
}

export default Results;