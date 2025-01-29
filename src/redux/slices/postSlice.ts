import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/api.service.ts";

type PostSliceType={
    posts: IPost[],
    loadState: boolean,
}

const initialState: PostSliceType = {posts: [], loadState: false};



export const loadPosts = createAsyncThunk(
    'userSlice/loadPosts',
    async (_, thunkAPI) => {
        const posts = await getAll<IPost[]>('/posts');
        console.log(posts)
        return thunkAPI.fulfillWithValue(posts)
    }
)


export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;

        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
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

export const postSliceActions = {
    ...postSlice.actions, loadPosts
}