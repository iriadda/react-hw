import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[],
    loadState: boolean
}
const initialState: UserSliceType = {users: [], loadState: false};


export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        const users = await getAll<IUser[]>('/users');
        console.log(users)
        return thunkAPI.fulfillWithValue(users)
    }
)


export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder
    .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload
    })
    // .addCase(loadUsers.rejected, (state, action) => {
    //     console.log(state);
    //     console.log(action);
    // })
    // .addMatcher(isFulfilled(loadUsers), (state) => {
    //     state.loadState = true;
    // })
    // .addMatcher(isRejected( loadUsers), (state) => {
    //     console.log(state);
    // })

});


export const userSliceActions = {
    ...userSlice.actions, loadUsers
}