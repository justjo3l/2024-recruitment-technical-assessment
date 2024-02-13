
/**
 * Task 1
 */
function leafFiles(files) {
    let leaves = [];
    let parents = [];

    // Loops through all of the files
    for (let i = 0; i < files.length; i++) {

        // If the file's parent is a leaf, remove the parent from the leaves array
        if (leaves.includes(files[i].parent)) {
            leaves.splice(leaves.indexOf(files[i].parent), 1);
        }

        // If the file is not a parent, add it to the leaves array
        if (!parents.includes(files[i].id)) {
            leaves.push(files[i].id);
        }

        // Add the file's parent to the parents array
        parents.push(files[i].parent);
    }

    // Get the names of the leaf files
    let leafNames = files.filter(file => leaves.includes(file.id)).map(file => file.name);

    return leafNames;
}

/**
 * Task 2
 */
function kLargestCategories(files, k) {
    let categoryMap = {};

    // Loops through each of the files
    for (let i = 0; i < files.length; i++) {

        // Loops through each of the file's categories
        for (let j = 0; j < files[i].categories.length; j++) {

            if (categoryMap[files[i].categories[j]]) {
                // If the category is already in the map, increment the count
                categoryMap[files[i].categories[j]] += 1
            } else {
                // If the category is not in the map, add it to the map with a count of 1
                categoryMap[files[i].categories[j]] = 1
            }
        }
    }

    let categories = [];

    // Loops through the category map and adds the categories to the categories array
    for (let category in categoryMap) {
        categories.push([category, categoryMap[category]]);
    }

    // Sorts the categories array by count and then by name
    categories.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    // Returns the first k categories
    return categories.slice(0, k).map(category => category[0]);
}

/**
 * Task 3
 */
function largestFileSize(files) {
    if (!files) {
        return 0;
    }

    let currFiles = [...files];

    let allRoot = false;

    // Loops through the files until all of the files are roots
    while (!allRoot) {

        let leaves = [];
        let parents = [];

        // Loops through all of the files
        for (let i = 0; i < currFiles.length; i++) {

            // If the file's parent is a leaf, remove the parent from the leaves array
            if (leaves.includes(currFiles[i].parent)) {
                leaves.splice(leaves.indexOf(currFiles[i].parent), 1);
            }

            // If the file is not a parent, add it to the leaves array
            if (!parents.includes(currFiles[i].id)) {
                leaves.push(currFiles[i].id);
            }

            // Add the file's parent to the parents array
            parents.push(currFiles[i].parent);
        }

        // Get the names of the leaf files
        let leafFiles = files.filter(file => leaves.includes(file.id));

        allRoot = true;
        let i = 0;

        // Loops through the leaf files and adds the size to the parent
        while (allRoot === true && i < leafFiles.length) {

            if (leafFiles[i].parent !== -1) {
                // If the file is not a root, add the size to the parent and remove the file from the current files
                let currParentIndex = currFiles.findIndex(file => file.id === leafFiles[i].parent);
                currFiles[currParentIndex].size += leafFiles[i].size;
                currFiles.splice(currFiles.findIndex(file => file.id === leafFiles[i].id), 1);
                leafFiles.splice(i, 1);
                allRoot = false;
            } else {
                // If the file is a root, increment the index
                i++;
            }
        }
    }

    // Returns the largest file size
    return Math.max(...currFiles.map(file => file.size));

}


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];

console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));

console.assert(largestFileSize(testFiles) == 20992)
