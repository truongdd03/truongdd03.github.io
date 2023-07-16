/**
 * Base class for any element in the game
 */
export class GameElement {
    /**
     * The HTML id of this element
     */
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    /**
     * Handle this element updates after a time interval
     */
    public update() { this.updateView(); }

    /**
     * Update the html element to display the changes
     */
    public updateView() {}

    public create() {}
    
    /**
     * @returns the html element of this game element.
     */
    public getElement(): HTMLElement {
        return document.getElementById(this.id)!;
    }

    public hide() {
        this.getElement().style.display = 'none';
    }

    public show() {
        this.getElement().style.display = 'inline';
    }

    public shouldRemove(): boolean {
        return false;
    }
}