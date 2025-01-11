import {useEffect, useState} from "react";
import {IPosts} from "../../models/IPosts.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import {getPosts} from "../../services/posts.api.service.ts";


export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        getPosts()
            .then((value) => {
                setPosts(value.posts);
            })
    })
    return (
        <div>
            {posts.map(post => (<PostComponent key={post.id} post={post}/>))}
        </div>
    );
};