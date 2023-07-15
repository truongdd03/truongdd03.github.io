export class Shiba {
    spriteNumber: number = 0;

    public update() {
        this.spriteNumber = (this.spriteNumber + 1) % 3;
    }
}