
/**
 * Task 1
 */
function leafFiles(files) {
    leaves = [];
    parents = [];

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
    leafNames = files.filter(file => leaves.includes(file.id)).map(file => file.name);

    return leafNames;
}

/**
 * Task 1
 */
function kLargestCategories(files, k) {
    return [];
}

/**
 * Task 1
 */
function largestFileSize(files) {
    return 0;
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
