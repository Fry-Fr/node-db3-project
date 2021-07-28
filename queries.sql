-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName
FROM Product
JOIN Category
GROUP BY ProductName

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT Id, CompanyName
FROM [Order]
JOIN Shipper
WHERE [Order].OrderDate <= '2012-08-09'
GROUP BY [Order].OrderDate

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT [Order].Id,ProductName, QuantityPerUnit
FROM Product
JOIN [Order]
WHERE [Order].Id = '10251'
GROUP BY ProductName
LIMIT 3

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT [Order].Id as 'Order Id', Customer.CompanyName as 'Compnay Name', Employee.LastName as 'Employee LastName'
FROM [Order]
JOIN Customer, Employee
GROUP BY [Order].Id
