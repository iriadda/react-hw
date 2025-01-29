import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlice.ts";
import {IPost} from "../../models/IPost.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state)=>state.postSlice.posts);

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);




    return (
        <div>
            {posts.map((post:IPost) => <PostComponent post={post} key={post.id} />)}
        </div>
    );
};