## steps
9. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
13. Add Redux to Product Screen
    1. create product details constants, actions and reducers
    2. add reducer to store.js
    3. use action in ProductScreen.js
    4. add /api/product/:id to backend api
18. Create Sample Users In MongoDB
    1. npm install mongoose
    2. connect to mongodb
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create userRoute
    9. Seed sample data
19. Create Sample Products In MongoDB
    1. create models/productModel.js
    2. create productSchema and productModel
    3. create productRoute
    4. Seed sample data
20. Create Sign-in Backend
    1. create /signin api
    2. check email and password
    3. generate token
    4. install json web token
    5. install dotenv
    6. return token and data
    7. test it using postman
27. Create Place Order API
    1. createOrder api
    2. create orderModel
    3. create orderRouter
    4. create post order route
30. Add PayPal Button
    1. get client id from paypal
    2. set it in .env file
    3. create route form /api/paypal/clientId
    4. create getPaypalClientID in api.js
    5. add paypal checkout script in OrderScreen.js
    6. show paypal button
32. Display Orders History
    1. create customer orders api
    2. create api for getMyOrders
    3. show orders in profile screen
    4. style orders
33. Display User Profile
    1. create user details api
    2. show user information
34. Update User Profile
    1. create user update api
    2. update user info
35. Create Admin View
    1. Create Admin Menu
    2. Create Admin Middleware in Backend
    3. Create Admin Route in Frontend
37. Create Product
    1. build create product api
    2. build Create Product button
    3. define product create constant, action and reducer
    4. use action in Product List Screen
38. Build Product Edit Screen
    1. create edit screen
    2. define state
    3. create fields
    4. load product details
    5.  add to routes
39. Update Product
    1. define update api
    2. define product update constant, action and reducer
    3. use action in Product Edit Screen
40. Upload Product Image
    1. npm install multer
    7. define upload router
    8. create uploads folder 
    9. Handle frontend
41. Delete Product
    1.  create delete api in backend
    2.  create delete constants, action and reducer
    3.  use it in product list screen
42. List Orders
    1. create order list api
    2. create Order List Screen
    3. Add reducer to store
    4. show products on the screen
44. Deliver Order
    1. create constant, actions and reducers for deliver order
    2. add order deliver action to order details screen
46. List Users
    1. build api for list users
    2. Create UserList Screen
    3. create order details constant, action and reducer

