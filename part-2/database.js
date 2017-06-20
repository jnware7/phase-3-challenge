
var connectionString = 'http://localhost:5432/grocery_store'
var pgp = require('pg-promise')()
var db = pgp(connectionString)

var ALL_ITEMS = `
SELECT
* FROM
grocery_items`

var ITEMS_IN_SECTION = `
SELECT
NAME, id FROM
grocery_items
WHERE
section = $1`

 var CHEAP_ITEMS = `
 SELECT
 * FROM
 grocery_items
 WHERE
 Price < 10 ORDER
 BY
 Price
 ASC`

var COUNT_ITEMS_IN_SECTION = `
SELECT COUNT(section)
FROM
grocery_items
WHERE
section = $1`

var MOST_RECENT_ORDER = `
SELECT id, log_timestamp
FROM
orders
ORDER BY
log_timestamp
LIMIT 10 `

var LAST_SHOPPER_NAME = `
SELECT x.name
FROM
shoppers x
INNER JOIN
orders o
ON x.id = o.shoppers_id
LIMIT 1`

var ORDER_TOTAL = `
SELECT shoppers_id,SUM(price)
FROM
orders x
full JOIN
grocery_items o
ON
x.grocery_items_id =o.id
WHERE shoppers_id = $1
GROUP BY shoppers_id `


  function cheapItems() {
      return db.many(CHEAP_ITEMS,[])
  };
  function allItems() {
    return db.many(ALL_ITEMS,[])
  };
  function itemsInSection(id) {
    return db.one(ITEMS_IN_SECTION,[id])
  };
   function countItemsInSection(section) {
    return db.one(COUNT_ITEMS_IN_SECTION,[section])
  };
   function mostRecentOrder() {
    return db.one(MOST_RECENT_ORDER,[])
  };
  function lastShopperName() {
    return db.one(LAST_SHOPPER_NAME,[])
  };
  function orderTotal(id) {
    return db.one(ORDER_TOTAL,[id])
  };

// allItems().then(console.log)

module.exports = {
  cheapItems,
  allItems,
  itemsInSection,
  countItemsInSection,
  mostRecentOrder,
  lastShopperName,
  orderTotal
} ;
