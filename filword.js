const gridData = [
    ["И","Р","С","А","М","Н","У","Т","И","Е","К","Л"],
    ["К","О","Т","Л","А","Н","Д","Ы","Ш","О","Т","С"],
    ["С","А","К","Н","О","П","Е","М","А","О","К","К"],
    ["О","Ш","К","О","Л","А","М","Я","Т","Р","Н","О"],
    ["Ч","П","О","Е","Б","Ц","В","Л","И","А","О","Т"],
    ["К","Н","И","Г","А","А","Т","С","Г","Ч","А","А"],
    ["Л","С","М","И","А","Н","О","Я","И","Ь","К","Р"],
    ["Д","О","М","Н","Л","А","А","А","Б","Б","И","В"],
    ["Я","М","О","Ю","Я","Б","Л","О","К","О","К","И"],
    ["П","Т","Р","Ы","Ж","Н","М","Д","Ж","И","Е","Т"],
    ["В","О","Д","А","Р","Е","К","В","Т","Ю","Р","Ь"],
    ["У","Ч","И","Т","Е","Л","Ь","А","А","М","Н","Н"],
];

const words = ["КОТ", "МАМА", "ЯБЛОКО", "ДОМ", "ШКОЛА", "СОБАКА", "КНИГА", "ОКНО", "ВОДА", "УЧИТЕЛЬ", "ЛАНДЫШ"];

const gridElement = document.getElementById("grid");
const statusText = document.getElementById("statusText");

let selectedCells = [];
let selectedText = "";
let direction = null;

gridData.forEach((row, rowIndex) => {
    row.forEach((char, colIndex) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = char;
        cell.dataset.row = rowIndex;
        cell.dataset.col = colIndex;
        cell.addEventListener("mousedown", startSelection);
        cell.addEventListener("mouseover", continueSelection);
        cell.addEventListener("mouseup", endSelection);
        gridElement.appendChild(cell);
    });
});

/**
 * Starts a new selection when the user presses the mouse button on a grid cell.
 * Resets any previous selection and stores the starting cell and character.
 *
 * @param {MouseEvent} e - The mousedown event on a grid cell.
 */
function startSelection(e) {
    clearSelection();
    e.target.classList.add("selected");
    selectedCells.push(e.target);
    selectedText = e.target.textContent;
    direction = null;
    e.preventDefault();
}

/**
 * Continues the selection as the user drags the mouse over grid cells.
 * Only allows linear (horizontal or vertical) selections, one direction at a time.
 *
 * @param {MouseEvent} e - The mouseover event on a grid cell.
 */
function continueSelection(e) {
    if (e.buttons !== 1) return;
    const cell = e.target;
    if (!cell.classList.contains("cell") || selectedCells.includes(cell)) return;

    const last = selectedCells[selectedCells.length - 1];
    const dir = getDirection(last, cell);
    if (!dir) return;

    if (selectedCells.length === 1) {
        direction = dir;
    } else {
        const expectedRow = parseInt(last.dataset.row) + direction.row;
        const expectedCol = parseInt(last.dataset.col) + direction.col;
        if (parseInt(cell.dataset.row) !== expectedRow || parseInt(cell.dataset.col) !== expectedCol) {
            return;
        }
    }

    cell.classList.add("selected");
    selectedCells.push(cell);
    selectedText += cell.textContent;
}

/**
 * Finalizes the selection when the user releases the mouse button.
 * Triggers a check for whether the selected word is valid.
 */
function endSelection() {
    checkWord();
}

/**
 * Determines the direction from one cell to another (either horizontal or vertical).
 * Returns null if the direction is diagonal or the same cell.
 *
 * @param {HTMLElement} from - The starting grid cell.
 * @param {HTMLElement} to - The target grid cell.
 * @returns {{row: number, col: number} | null} - The direction vector or null if invalid.
 */
function getDirection(from, to) {
    const rowDiff = parseInt(to.dataset.row) - parseInt(from.dataset.row);
    const colDiff = parseInt(to.dataset.col) - parseInt(from.dataset.col);
    if ((rowDiff !== 0 && colDiff !== 0) || (rowDiff === 0 && colDiff === 0)) return null;
    return { row: Math.sign(rowDiff), col: Math.sign(colDiff) };
}

/**
 * Checks if the currently selected sequence of letters matches a valid word.
 * If the word is found in the list, the cells are marked as found.
 * Otherwise, the selection is cleared.
 */
function checkWord() {
    const word = selectedText.toUpperCase();
    if (words.includes(word)) {
        //statusText.textContent = `✅ Знайдено слово: ${word}`;
        selectedCells.forEach(cell => cell.classList.add("found"));
    } else {
        //statusText.textContent = `❌ Неправильно: ${word}`;
        clearSelection();
    }
}

/**
 * Clears the current selection of cells and resets tracking variables.
 * Used when the selected word is invalid or when starting a new selection.
 */
function clearSelection() {
    document.querySelectorAll(".cell").forEach(cell => cell.classList.remove("selected"));
    selectedCells = [];
    selectedText = "";
    direction = null;
}