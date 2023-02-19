
import GarageData from "./garage-data";
import ListBar from "../listBar/listBar";
import NavBar from "../navBar/navBar";


const GarageDataComponent = () =>{
    return(<>
            <div className="row"><NavBar></NavBar></div>
            <div className="row">
                <div className="col-2">
                    <ListBar></ListBar>
                </div>
                <div className="col-10">
                    <GarageData></GarageData>
                </div>
            </div>


        </>
    )
}

export default GarageDataComponent;
