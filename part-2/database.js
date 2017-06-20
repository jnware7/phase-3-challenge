
var connectionString = 'http://localhost:5432/grocery_store'
var pgp = require('pg-promise')()
var db = pgp(connectionString)

var allItems = `
SELECT
* FROM
grocery_items`

var itemsInSection = `
SELECT
* FROM
grocery_items
WHERE
section = $1`

 var cheapItems = `
 SELECT
 * FROM
 grocery_items
 WHERE
 Price < 10 ORDER
 BY
 Price
 DESC`

var countItemsInSection = `
SELECT COUNT(section)
FROM
grocery_items
WHERE
id = $1`

var mostRecentOrder = `
SELECT id, log_timestamp
FROM
orders
ORDER BY
log_timestamp
LIMIT 10 `

var lastShopperName = `
SELECT x.name
FROM
shoppers x
INNER JOIN
orders o
ON x.id = o.shoppers_id
LIMIT 1`

var orderTotal = `
SELECT shoppers_id,SUM(price)
FROM
orders x
full JOIN
grocery_items o
ON
x.grocery_items_id =o.id
WHERE shoppers_id = $1
GROUP BY shoppers_id `

var checkout = {
  cheapItems:() function {
      return db.many(CHEAP_ITEMS,[])
  },
  allItems:() function {
    return db.many(ALL_ITEMS,[])
  },
  itemsInSection:(id) function {
    return db.one(ITEMS_IN_SECTION,[id])
  },
  countItemsInSection :(id) function {
    return db.one(COUNT_ITEMS_IN_SECTION,[id])
  },
  mostRecentOrder: () function {
    return db.many(mostRecentOrder,[])
  },
  lastShopperName:() function {
    return db.one(LAST_SHOPPER_NAME,[])
  },
  orderTotal:(id) function {
    return db.one(ORDER_TOTAL,[id])
  }
}
module.exports = checkout
