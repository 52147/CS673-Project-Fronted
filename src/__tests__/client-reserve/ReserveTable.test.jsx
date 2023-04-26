import { configureStore } from "@reduxjs/toolkit";
import { clientrecordFormThunk } from "../../services/formThunk";

import inputCarReducer from "../../parking-garage-automation/reducers/inputCarReducer";
import parkInfoReducer from "../../parking-garage-automation/reducers/parkInfoReducer";
import loginReducer from "../../parking-garage-automation/reducers/loginReducer";
import parkHistoryReducer from "../../parking-garage-automation/reducers/parkHistoryReducer";
import checkOutCarReducer from "../../parking-garage-automation/reducers/checkOutCarReducer";
import authorityReducer from "../../parking-garage-automation/reducers/authorityReducer";
import feeManagementReducer from "../../parking-garage-automation/reducers/feeManagementReducer";
import registerReducer from "../../parking-garage-automation/reducers/registerReducer";
import garageDataReducer from "../../parking-garage-automation/reducers/garageDataReducer";
import FormReducer from "../../parking-garage-automation/reducers/FormReducer";
import forgetPasswordReducer from "../../parking-garage-automation/reducers/forgetPasswordReducer";
import membershipReducer from "../../parking-garage-automation/reducers/membershipReducer";
const store = configureStore({
  reducer: {
    checkInCars: inputCarReducer,
    parkInfo: parkInfoReducer,
    parkHistory: parkHistoryReducer,
    users: loginReducer,
    checkOutCars: checkOutCarReducer,
    parkFee: feeManagementReducer,
    authoHistory: authorityReducer,
    parkRegister: registerReducer,
    garageData: garageDataReducer,
    updateForm: FormReducer,
    forgetPassword: forgetPasswordReducer,
    parkMembership: membershipReducer,
  },
});
describe("clientrecordFormThunk", () => {
  it("should show an error message on failed show ueser", async () => {
    const userData = { carType: "Bicycle", plate: "123456" };
    const res = await store.dispatch(clientrecordFormThunk());
    console.log("res2", res);
    expect(res.type).toBe("/parklot/showUser/rejected");
  });
});
