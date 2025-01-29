import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment.ts";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[],
    loadState: boolean
}

const initialState: CommentSliceType = {comments: [], loadState: false};


export const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        const comments = await getAll<IComment[]>('/comments');
        console.log(comments)
        return thunkAPI.fulfillWithValue(comments)
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

export const commentSliceAction = {
    ...commentSlice.actions, loadComments
}