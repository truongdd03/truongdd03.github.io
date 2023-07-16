import { MovableElement } from './MovableElement';

export class Cloud extends MovableElement {
    private CloudImage0 = '/assets/images/newsfeed/zoomiesShiba/cloud/cloud0.png';
    private CloudImage1 = '/assets/images/newsfeed/zoomiesShiba/cloud/cloud1.png';

    constructor(id: string, speed: number) {
        super(id, speed, 80);

        const cloud = new Image();
        cloud.id = id;
        cloud.className = 'cloud';

        // Randomly select cloud image
        if (Math.floor(Math.random() * 2) == 0) {
            cloud.src = this.CloudImage0;
        } else {
            cloud.src = this.CloudImage1;
        }

        cloud.style.left = `${this.positionX}px`;
        cloud.style.display = 'none';
        document.getElementById('components')?.appendChild(cloud);
    }
}