import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../../models/IPost.ts";

type postSliceType = {
    posts: IPost[];
    loadState: boolean;
}

const initialState: postSliceType = {posts: [], loadState: false};


const loadPosts= createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI)=>{
        try {
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
            return thunkAPI.fulfillWithValue(posts);
        }catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue(e);
        }
    }
)



export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers:builder => {
        builder
            .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts=action.payload
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(action)
                console.log(state);
            })
            .addMatcher(isFulfilled( loadPosts), (state) => {
                state.loadState = true;
            })
    }
})

export const postSliceActions = {
    ...postSlice.actions, loadPosts
}