import React,{Component} from 'react';
import {Form,FormGroup,FormControl} from 'react-bootstrap';



class Formulario extends Component {
  constructor(props) {
    super(props);
  
    this.state={
    	movieName:null
   }

    this.handleChange=this.handleChange.bind(this);
  }


   handleChange(e){
		this.setState({
			movieName : e.target.value
		})
		this.props.sendMovieName(e.target.value);
	
   }



  render(){

    return(
            
      <Form.Group>
        
        <Form.Control 
        type = "text" 
        placeholder = "Nombre de película"
        name = "searchTerm"
        onChange = {this.handleChange} />
  
      </Form.Group>


      )

  }

}


export default Formulario;