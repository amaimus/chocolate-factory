const input = [1, 2, 1, 4, 4, 4, 1, 2, 1, 1]
var maxChocolateTypes = 2
collectBars(input);

function collectBars(bars) {
    const result = bars.reduce(compareBarsQuantity, { quantity: 0, bars: [] })
    displayResult(result)
}

function compareBarsQuantity(previousCollectedBars, current, index, bars) {
    const collectedBars = getBars(index, bars)
    return collectedBars.quantity > previousCollectedBars.quantity
        ? collectedBars
        : previousCollectedBars
}

function getBars(index, bars) {
    const baskets = {}
    let skipIndex = null
    bars
        .slice(index, bars.length)
        .forEach((bar, index) => {
            if (skipIndex) return
            if (baskets[bar]) return baskets[bar] += 1
            return Object.keys(baskets).length < maxChocolateTypes
                ? baskets[bar] = 1
                : skipIndex = index;
        })
    const total = Object.keys(baskets).reduce((prev, curr) => {
        return prev + baskets[curr]
    }, 0)
    const barsShare = bars.slice(index, bars.length).slice(0, skipIndex || bars.length)
    return {
        quantity: total,
        bars: barsShare
    }
}
function displayResult({ quantity, bars }) {
    console.log('Output:', quantity)
    console.log('Explanation: We can pick from bars', bars)
}
