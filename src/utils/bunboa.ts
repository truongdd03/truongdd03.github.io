export interface Person {
    image: string,
    name: string,
}

export interface Data {
    date: Date,
    his: Person,
    her: Person,
}

export interface FormattedFile {
    objectURL: string;
    name: string;
}