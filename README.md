Live Link: https://assignment-8-book-catallog-backend.vercel.app/

Application Routes:
User
api/v1/auth/signup (POST)
api/v1/users (GET)
api/v1/users/cdd70898-3101-421c-8f35-48e594d220bf (Single GET) 
api/v1/users/cdd70898-3101-421c-8f35-48e594d220bf (PATCH)
api/v1/users/cdd70898-3101-421c-8f35-48e594d220bf (DELETE)
api/v1/profile (GET)


Category
api/v1/categories/create-category (POST)
api/v1/categories (GET)
api/v1/categories/9a0e3ef0-fc6d-4438-8e0c-2a9176271a51 (Single GET) 
api/v1/categories/9a0e3ef0-fc6d-4438-8e0c-2a9176271a51 (PATCH)
api/v1/categories/9a0e3ef0-fc6d-4438-8e0c-2a9176271a51 (DELETE) 


Books
api/v1/books/create-book (POST)
api/v1/books (GET)
api/v1/books/9a0e3ef0-fc6d-4438-8e0c-2a9176271a51/category (GET)
api/v1/books/3e0ba409-13ae-4ea0-86f8-9758c8ffaaf3 (GET)
api/v1/books/3e0ba409-13ae-4ea0-86f8-9758c8ffaaf3 (PATCH)
api/v1/books/3e0ba409-13ae-4ea0-86f8-9758c8ffaaf3 (DELETE)


Orders
api/v1/orders/create-order (POST)
api/v1/orders (GET)
api/v1/orders/:orderId (GET)