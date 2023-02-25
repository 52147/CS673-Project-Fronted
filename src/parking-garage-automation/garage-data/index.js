
import GarageData from "./garage-data";
import ListBar from "../listBar/listBar";
import NavBar from "../navBar/navBar";


const GarageDataComponent = () =>{
    return(<>
            {/*<div className="row"><NavBar></NavBar></div>*/}
            {/*<div className="row">*/}
            {/*    <div className="col-6">*/}
            {/*        <ListBar></ListBar>*/}
            {/*    </div>*/}
            {/*    <div className="col-6">*/}
            {/*        <GarageData></GarageData>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <NavBar></NavBar>
            <ListBar></ListBar>
            <GarageData></GarageData>

        </>
    )
}

export default GarageDataComponent;
