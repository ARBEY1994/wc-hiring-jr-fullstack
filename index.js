/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from "./libs/test.js";

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from "lodash";
const source = $t.source(1);
$t.answer(1, async () => {
  const targetData = {
    balance: 0,
    income: 0,
    expenses: 0,
    byCategories: {},
  };

  _.forEach(source, (e) => {
    const { category, amount, type } = e;
    if (type === "income") {
      targetData.income += amount;
    } else if (type === "expense") {
      targetData.expenses += amount;
    }
    targetData.byCategories[category] =
      (targetData.byCategories[category] || 0) +
      (type === "income" ? amount : -amount);
  });

  targetData.balance = targetData.income - targetData.expenses;

  return targetData;
});

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2);
$t.answer(2, async () => {
  const ids = await $source.getIds(); // Step 1: Get ids
  const textPromises = ids.map((id) => $source.getText(id)); // Step 2: Get text for every id
  const texts = await Promise.all(textPromises); // Wait for all promises to resolve
  return texts; // Step 3: Return array of texts
});
