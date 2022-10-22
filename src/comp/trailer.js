
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route,  useNavigate, useParams} from "react-router-dom";
export default function Trailer(props) {
    const navigate = useNavigate();
    const {show} = useParams();
    const found=props.list.find(element => element.slach==show)
    return(
     <>
        <Container>
      <Navbar style={{textAlign:"left", backgroundColor:"#bcbcbc" }}>
        <Container>
          <Navbar.Brand className="nav" >Titiflix-show time</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
       
       <h1 style={{fontSize:"50px", textAlign:"center", color:"rgb(3, 134, 134)"}}>Film {found.id} : {found.titre}</h1>
       <p style={{fontSize:"30px", textAlign:"center"}}>{found.description}</p>
<div style={{textAlign:"center"}}>
       <iframe width="731" 
       height="411" 
       src={found.srce} 
       title={found.title}
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen></iframe>
</div>

   <div style={{textAlign:"center", paddingBottom:"30px"}}>
        <button onClick={() => navigate('/')} style={{fontSize:"20px",  backgroundColor:"#bcbcbc" }}>Back home</button> </div></>
    )
}