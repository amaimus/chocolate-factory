function collectBestBars(chocolateBars) {
    const result = chocolateBars.reduce(compareBarsQuantity, { quantity: 0, selectedBars: [] });
    displayResult(result);
}

function compareBarsQuantity(previousBest, current, index, chocolateBars) {
    const bestBars = findBestBars(index, chocolateBars);
    return bestBars.quantity > previousBest.quantity ? bestBars : previousBest;
}

function findBestBars(startIndex, chocolateBars) {
    const baskets = {};
    let skipIndex = null;

    chocolateBars.slice(startIndex).forEach((bar, index) => {
        if (skipIndex) return;
        
        if (baskets[bar]) return (baskets[bar] += 1);

        if (Object.keys(baskets).length < MAX_TYPES_OF_CHOCOLATE) {
            baskets[bar] = 1;
        } else {
            skipIndex = index;
        }
    });

    const totalQuantity = Object.values(baskets).reduce((total, count) => total + count, 0);
    const selectedBars = chocolateBars.slice(startIndex).slice(0, skipIndex || chocolateBars.length);

    return {
        quantity: totalQuantity,
        selectedBars: selectedBars
    };
}

function displayResult({ quantity, selectedBars }) {
    console.log('Output:', quantity);
    console.log('Explanation: We can pick from bars', selectedBars);
}

const chocolateBars = [1, 2, 1, 4, 4, 4, 1, 2, 1, 1];
const maxTypeOfChocolates = 2;

collectBestBars(chocolateBars);
