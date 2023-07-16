export const tagColor: Record<string, string> = {
    'random': 'orange',
    'typescript': 'blue',
    'C++': 'red',
    'interactive': 'purple',
}

export enum PostType {
    Post = 'post',
    Code = 'code',
}

export class Post {
    type: PostType;
    date: string;
    content: string;
    imageUrls: string[];
    tags: string[];
    elementId: string; // Only used for code posts

    constructor(type: PostType, date: string, content: string, imageUrls: string[], tags: string[], elementId: string = '') {
        this.type = type;
        this.date = date;
        this.content = content;
        this.imageUrls = imageUrls;
        this.tags = tags;
        this.elementId = elementId;
    }

    public isCodePost = (): boolean => {
        return this.type === PostType.Code;
    }
}
