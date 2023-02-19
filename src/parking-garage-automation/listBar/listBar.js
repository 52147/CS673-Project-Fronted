import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate} from "react-router";
import styles from "./listBar.module.css"

const ListBar = () => {

    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };

    const navigate = useNavigate()

    const navHome = ()=>{
        navigate('/');
    }


    return (
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Info</a></li>
                <li><a href="#contact">Pay</a></li>
            </ul>
    );


}
export default ListBar;
