inner join customers and orders with customerId

SELECT customers.CustomerName, customers.Country, orders.OrderId, orders.OrderDate
FROM customers
inner JOIN orders on customers.customerId = orders.customerId

inner join customers and orders and employees

SELECT customers.CustomerName, customers.Country, employees.FirstName, employees.LastName, orders.\*
FROM customers
inner JOIN orders on customers.customerId = orders.customerId
inner JOIN employees on employees.employeeId = orders.employeeId
