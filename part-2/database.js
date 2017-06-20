
var connectionString = 'http://localhost:5432/grocery_store'
var pgp = require('pg-promise')()
var db = pgp(connectionString)

var allItems = 'SELECT * FROM grocery_items'

var itemsInSection = 'SELECT * FROM grocery_items WHERE section = $1'

 var cheapItems = 'SELECT * FROM grocery_items WHERE Price < 10 ORDER BY Price DESC'

var countItemsInSection = 'SELECT COUNT(section) FROM grocery_items WHERE id = $1'

var mostRecentOrder = 'SELECT id, log_timestamp FROM orders ORDER BY log_timestamp LIMIT 10 '

var lastShopperName = 'SELECT * FROM orders LIMIT 1'

var orderTotal =
