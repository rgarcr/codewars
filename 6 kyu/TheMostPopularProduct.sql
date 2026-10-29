-- Let's consider a situation where we have three tables:

-- users table:

-- Columns: id, name
-- Primary key: id
-- products table:

-- Columns: id, product_name
-- Primary key: id
-- orders table:

-- Columns: id, user_id, product_id
-- Primary key: id
-- Foreign keys: user_id references users(id), product_id references products(id)
-- In this kata, we need to find the most popular product (i.e., the product that has been ordered the most). In case of a tie in the number of orders, return all most ordered products ordered by product ID in descending order. Include in the result also the total number of orders for that product.

--My solution

SELECT p.id AS product_id, p.product_name, COUNT(*) AS count_orders FROM products p
JOIN orders o ON p.id = o.product_id
GROUP BY p.id
HAVING COUNT(*) = (
    SELECT COUNT(*) 
    FROM orders o2 
    GROUP BY o2.product_id 
    ORDER BY COUNT(*) DESC 
    LIMIT 1
)
ORDER BY count_orders DESC, p.id DESC