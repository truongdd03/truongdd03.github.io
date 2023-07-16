import { GameElement } from './GameElement';

export class Shiba extends GameElement {
    /**
     * The current sprite image number (0..2)
     */
    spriteNumber: number = 0;
    /**
     * Is shiba jumping?
     */
    isJumping: boolean = false;
    /**
     * The height of the shiba (during jumping)
     */
    deltaY: number = 0;
    /**
     * Is shiba falling?
     */
    isFalling: boolean = false;

    /**
     * Maximum height when jump (px)
     */
    private MaxDeltaY = 90;
    /**
     * The height unit (px) to update per 100 ms
     */
    private HeightPerTime = 28;

    constructor(id: string) {
        super(id);

        // Create a new shiba and insert it to the view
        const shiba = new Image();
        shiba.id = id;
        shiba.className = 'shiba';
        shiba.src = this.getShibaImage();
        document.getElementById('components')?.appendChild(shiba);
    }

    public update() {
        this.spriteNumber = (this.spriteNumber + 1) % 3;

        if (this.isJumping) {
            // Height changes, aka deltaY changes
            if (this.isFalling) {
                // Height is decreasing
                this.deltaY -= this.HeightPerTime;
                this.deltaY = Math.max(this.deltaY, 0);
                if (this.deltaY == 0) {
                    this.isJumping = false;
                    this.isFalling = false;
                }
            } else {
                // Height is increasing
                this.deltaY += this.HeightPerTime;
                this.deltaY = Math.min(this.deltaY, this.MaxDeltaY);
                if (this.deltaY == this.MaxDeltaY) {
                    // Start to fall down
                    this.isFalling = true;
                }
            }
        }

        super.update();
    }

    public updateView() {
        const shibaElement = this.getElement() as HTMLImageElement;

        shibaElement.src = this.getShibaImage();
        shibaElement.style.marginBottom = `${this.deltaY}px`;
    }

    /**
     * Make shiba jump
     */
    public jump() {
        this.isJumping = true;
    }

    private getShibaImage() {
        return `/assets/images/newsfeed/zoomiesShiba/shiba_sprite/shiba_sprite${this.spriteNumber}.png`;
    }
}