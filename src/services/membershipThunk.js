import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './membershipService'
import {getAllMembership, purchaseMembership} from "./membershipService";


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




