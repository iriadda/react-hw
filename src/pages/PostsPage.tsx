
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";

export const PostsPage = () => {
    const{posts, loadState}=useAppSelector(({postSlice})=>postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceActions.loadPosts());
    },[])



    return (
        <div>
            {!loadState && <div>Loading...</div>}

            {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
};