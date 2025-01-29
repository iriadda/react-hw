import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlice.ts";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import {commentSliceAction} from "../../redux/slices/commentSlice.ts";


export const ComplexPage = () => {

    const dispatch = useAppDispatch();
    const {userSlice:{users}, postSlice:{posts}, commentSlice:{comments}} = useAppSelector((state)=>state);

useEffect(() => {
    if (!users.length){
        dispatch(userSliceActions.loadUsers())
    }
    if (!posts.length){
        dispatch(postSliceActions.loadPosts())
    }
    if (!comments.length){
        dispatch(commentSliceAction.loadComments())
    }
})

// const postsByUserId = posts.reduce((acc, post:IPost) => {
//     if (!acc[post.userId]) {
//         acc[post.userId] = [];
//         acc[post.userId].push(post);
//         return acc;
//     },{}
// })
//
//     const commentsByPostId = comments.reduce((acc, comment:IComment) => {
//         if (!acc[comment.postId]){
//             acc[comment.postId] = [];
//             acc[comment.postId].push(comment);
//             return acc;
//         }
//     })


    return (
        <div>
            {/*{users.map((user)=><ComplexComponent user={user} key={user.id} post={postsByUserId[user.id]} comment={commentsByPostId}/>)}*/}
        </div>
    );
};