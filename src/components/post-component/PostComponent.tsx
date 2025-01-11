import {IPosts} from "../../models/IPosts.ts";
import {FC} from "react";

interface PostsTypeProps {
    post: IPosts
}

export const PostComponent:FC <PostsTypeProps> = ({post}) => {

    return (
        <div>
            <h3>{post.id} {post.title}</h3>
        </div>
    );
};