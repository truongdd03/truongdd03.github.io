import { MovableElement } from './MovableElement';

export class Ghost extends MovableElement {
    private GhostImage = '/assets/images/newsfeed/zoomiesShiba/ghost/ghost.png';

    constructor(id: string, speed: number, offset = 0) {
        super(id, speed, 60);

        this.positionX += offset;

        const ghost = new Image();
        ghost.id = id;
        ghost.className = 'ghost';
        ghost.src = this.GhostImage;
        ghost.style.left = `${this.positionX}px`;
        ghost.style.display = 'none';
        document.getElementById('components')?.appendChild(ghost);
    }
}