const items = [
    { id: 1, name: 'Vitamins', "tags": ["vitamins", "vitamins overdose", "vitamin overose"], description: 'WHen you watch a little bit too much queens stream, you will get an overdose.' }
];

// Function to get URL parameter by name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to find an item by ID
function findItem(query) {
    return items.find((item) => {
      return item.name.toLowerCase() === query.toLowerCase() || item.tags.find((tag) => {
        return tag.toLowerCase() === query.toLowerCase()
      })
    });
}

// Main function to execute
function main() {
    const itemId = getUrlParameter('query'); 
    
    if (itemId) {
        const foundItem = findItem(query);
        
        if (foundItem) {
            console.log('Found item:', foundItem);
        } else {
            console.log('Item not found.');
        }
    } else {
        console.log('No ID parameter found in the URL.');
    }
}

// Call the main function
main();
