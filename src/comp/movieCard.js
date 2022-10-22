
import Card from 'react-bootstrap/Card';
import {Routes, Route,  useNavigate} from "react-router-dom";

export default function MouvieCard(props) {
  const styeTitre={color:"#282c34", fontSize:"20px"}
  const styerating={color:"#282c34", fontSize:"10px"}
  const navigate = useNavigate();
return(
<>
<Card style={{paddingBottom:"20px"}}>
<Card.Img variant="top" height={"350px"} src={props.posterURL} />
<Card.Body>
  <Card.Title style={styeTitre}><b>{props.titre}</b></Card.Title>
  <Card.Text>{props.description}</Card.Text>
  <Card.Text>Rating:<b>{props.rating}</b>/5</Card.Text>
</Card.Body>
<button onClick={() => navigate(`/${props.slach}`)}>show time</button>
</Card>

</>
)
}