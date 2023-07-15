export const enum Tag {
    Random = 'random',
    Programming = 'programming',
    Pets = 'pets',
}

export const tagColor: Record<string, string> = {
    'random': 'orange',
    'programming': 'blue',
    'pets': 'brown',
    'C++': 'red',
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
    tags: Tag[];
    elementId: string; // Only used for code posts

    constructor(type: PostType, date: string, content: string, imageUrls: string[], tags: Tag[], elementId: string = '') {
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
