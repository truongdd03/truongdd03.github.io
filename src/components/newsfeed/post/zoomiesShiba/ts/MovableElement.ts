import { GameElement } from './GameElement';

/**
 * Base class for movable elements
 */
export class MovableElement extends GameElement {
    /**
     * X position in px
     */
    positionX: number;
    /**
     * The left border, aka when this element should be hidden
     */
    leftBorder: number;
    /**
     * The right border, aka when this element should be displayed
     */
    rightBorder: number;
    /**
     * Moving speed
     */
    speed: number;

    constructor(id: string, speed: number, offset: number) {
        super(id);

        const gameViewWidth = document.getElementById('gameView')!.offsetWidth;

        this.rightBorder = gameViewWidth - offset;
        this.leftBorder = 0;
        this.positionX = this.rightBorder + offset;
        this.speed = speed;
    }

    public update() {
        this.positionX -= this.speed;
        super.update();
    }

    public updateView(): void {
        const element = this.getElement();
        element.style.left = `${this.positionX}px`;

        if (this.positionX <= this.rightBorder && this.positionX >= this.leftBorder) {
            super.show();
        } else {
            super.hide();
        }
    }

    public shouldRemove(): boolean {
        return this.positionX < this.leftBorder;
    }
}