// Assuming you have already included the Block class definition here

document.addEventListener('DOMContentLoaded', () => {
    const blockContainer = document.getElementById('block-container');

    if (!blockContainer) {
        console.error('Block container not found');
        return;
    }

    // Create some example blocks
    const blocks: Block[] = [
        new Block('block1', 'Block 1', 50, 50),
        new Block('block2', 'Block 2', 200, 50),
        new Block('block3', 'Block 3', 350, 50),
    ];

    // Render blocks
    blocks.forEach(block => {
        const blockElement = block.render();
        blockContainer.appendChild(blockElement);
    });
});
