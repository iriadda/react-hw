import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {commentSliceAction} from "../../redux/slices/commentSlice.ts";
import {IComment} from "../../models/IComment.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state)=>state.commentSlice.comments);

    useEffect(() => {
        dispatch(commentSliceAction.loadComments())
    },[])




    return (
    <div>
        {comments.map((comment:IComment) => <CommentComponent comment={comment} key={comment.id}/>)}
    </div>
    );
};