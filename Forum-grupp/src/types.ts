// import { immutableRouteKeys } from "@remix-run/router/dist/utils";

export type ThreadCategory = "THREAD" | "QNA" | "MEME";

export interface ThreadInterface {
    id: string;
    title: string;
    category: ThreadCategory;
    description: string;
    date: string;
    user: string;
    comments: [];
}

export interface CommentInterface {
    id: string;
    user: string;
    date: string;
    description: string;
}
