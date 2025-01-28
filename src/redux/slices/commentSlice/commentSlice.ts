import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../../models/IComment.ts";


type CommentSliceType = {
    comments: IComment[];
    loadState: boolean;
}

const initialState: CommentSliceType = {comments: [], loadState: false};


export const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async(_, thunkAPI) => {
        try{
            const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json());
            return thunkAPI.fulfillWithValue(comments)
        }catch(e){
            console.error(e);
            return thunkAPI.rejectWithValue(e)
        }
    }
)


export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload
            })
            .addCase(loadComments.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addMatcher(isFulfilled(loadComments), (state) => {
                state.loadState = true;
            })
            .addMatcher(isRejected( loadComments), (state) => {
                console.log(state);
            })

});

export const commentSliceActions = {
    ...commentSlice.actions, loadComments
}