import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './membershipService'
// import {getAllMembership, getMembershipByPlate, purchaseMembership} from "./membershipService";

export const getMembershipByPlateThunk = createAsyncThunk(
    '/getMembershipThunk', async (plate) => {
        console.log(plate)
        const json =  await service.getMembershipByPlate(plate)
        return json;
    }
)

export const getMembershipThunk = createAsyncThunk(
    '/getMembershipThunk', async (username) => {
        console.log(username)
        const json =  await service.getMembershipById(username)
        return json;
    }
)

export const getAllMembershipThunk = createAsyncThunk(
    '/getAllMembershipThunk', async () => {
        const json =  await service.getAllMembership()
        return json;
    }
)

export const purchaseMembershipThunk = createAsyncThunk(
    '/purchaseMembership', async (info) => {
        const membership = {
            //price:info.price,
            userId:info.userId,
            permitType:info.permitType,
            plate:info.plate,
        }
        const json =  await service.purchaseMembership(membership)
        return json;
    }
)




