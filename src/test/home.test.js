// logo.test.js

const fs = require('fs');
const path = require('path');

test('checks the content of the logo', () => {
    // Load the HTML file
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    
    // Set up a DOM environment
    document.documentElement.innerHTML = html;

    // Select the element by ID
    const logoElement = document.getElementById('logo');

    // Check if the element is not null
    expect(logoElement).not.toBeNull();

    // Check the inner HTML of the element
    expect(logoElement.innerHTML).toBe('ToastedBytes');
});
