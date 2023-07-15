import { GameElement } from './GameElement';

export class Ghost extends GameElement {
    /**
     * X position in px
     */
    positionX: number;
    leftBorder: number = -25;
    rightBorder: number;
    speed: number;

    private GhostImage = '/assets/images/newsfeed/zoomiesShiba/ghost.png';

    constructor(id: string, speed: number,) {
        super(id);

        const gameViewWidth = document.getElementById('gameView')!.offsetWidth;

        this.rightBorder = gameViewWidth - 60;
        this.positionX = this.rightBorder + 50;
        this.speed = speed;

        const ghost = new Image();
        ghost.id = id;
        ghost.className = 'ghost';
        ghost.src = this.GhostImage;
        ghost.style.left = `${this.positionX}px`;
        ghost.style.display = 'none';
        document.getElementById('components')?.appendChild(ghost);
        console.log(document.getElementById('components'));
    }

    public update(): void {
        this.positionX -= this.speed;
        super.update();
    }

    public updateView(): void {
        const ghost = this.getElement();
        ghost.style.left = `${this.positionX}px`;

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