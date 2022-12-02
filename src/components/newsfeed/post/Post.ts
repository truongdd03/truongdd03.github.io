export default class Post {
    date: string;
    content: string;
    imageUrls: string[];

    constructor(date: string, content: string, imageUrls: string[]) {
        this.date = date;
        this.content = content;
        this.imageUrls = imageUrls;
    }
}
