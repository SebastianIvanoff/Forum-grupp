// import { immutableRouteKeys } from "@remix-run/router/dist/utils";

type ThreadCategory = "THREAD" | "QNA" | "MEME"

export interface ThreadInterface {
    id: string;
    title: string;
    category: ThreadCategory;
    description: string;
    date: string;
    user: string;
    comments: CommentInterface[];
}

export interface CommentInterface {
    id: string
    user: string
    date: string
    description: string
}