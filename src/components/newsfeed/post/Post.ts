export const enum Tag {
    DailyLife = 'daily-life',
    Programming = 'programming',
    Pets = 'pets',
}

export const tagColor: Record<string, string> = {
    'daily-life': 'orange',
    'programming': 'blue',
    'pets': 'brown',
}

export class Post {
    date: string;
    content: string;
    imageUrls: string[];
    tags: Tag[];

    constructor(date: string, content: string, imageUrls: string[], tags: Tag[]) {
        this.date = date;
        this.content = content;
        this.imageUrls = imageUrls;
        this.tags = tags;
    }
}
