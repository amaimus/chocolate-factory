# Chocolate Factory - Proficiency Examination

## Selecting Chocolate Bars

During your visit to a chocolate factory, you will encounter a singular row of chocolate bars positioned from the left to the right. These bars are denoted by an array of integers named 'bars', where `bars[i]` represents the type of the ith bar.

Your objective is to gather the maximum amount of chocolate possible while adhering to the strict regulations set by the owner:

1. You possess only two baskets, with each basket capable of containing only a single variety of chocolate bar. There is no imposed limit on the quantity of chocolate bars each basket can accommodate.
2. Commencing from any chocolate bar of your choosing, you are required to select precisely one bar as you progress to the right. The selected chocolate bar must be accommodated within one of your baskets.
3. Your endeavor concludes once you encounter a chocolate bar that cannot be accommodated within your baskets.

Given the integer array `bars`, your task is to determine the highest count of bars you can select.

### Example 1:

Input: bars = [1, 2, 1]
Output: 3
Explanation: All bars can be chosen.

### Example 2:

Input: bars = [0, 1, 2, 2]
Output: 3
Explanation: Optimal selection from bars [1, 2, 2]. Choosing [0, 1] as the starting point would lead to a limited selection of [0, 1].

### Example 3:

Input: bars = [1, 2, 3, 2, 2]
Output: 4
Explanation: Optimal selection from bars [2, 3, 2, 2]. Starting at the first bar would result in a suboptimal choice of [1, 2].

### Example 4:

Input: bars = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
Output: 5
Explanation: Optimal selection from bars [1, 2, 1, 1, 2].

**Constraints:**
- The length of 'bars' is at least 1 and at most 100.
- Each element `bars[i]` satisfies 0 <= `bars[i]` < length of bars.
