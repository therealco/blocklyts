// Define a basic Block class
class Block {
    id: string;
    content: string;
    x: number;
    y: number;

    constructor(id: string, content: string, x: number, y: number) {
        this.id = id;
        this.content = content;
        this.x = x;
        this.y = y;
    }

    render(): HTMLElement {
        // Create a block element
        const blockElement = document.createElement('div');
        blockElement.id = this.id;
        blockElement.className = 'block';
        blockElement.style.left = `${this.x}px`;
        blockElement.style.top = `${this.y}px`;
        blockElement.innerText = this.content;

        return blockElement;
    }
}
