## To run this project
run commands
```
cd server
npm i
npm run dev
```

## The server will be running on
> http://localhost:4000/


## API planning

- Auth  
> SignUp
```
http://localhost:4000/auth/signup
```

> SignIn
```
http://localhost:4000/auth/signin
```

> Google Auth
```
http://localhost:4000/auth/google
```

- Foods
> Get all food based on particular restaurant
```
http://localhost:4000/food/r/:_id
```

> Get food based on id
```
http://localhost:4000/food/:_id
```

> Get all food based on particular category
```
http://localhost:4000/food/r/:category
```

- Restaurants
> Get all the restaurant details based in city
```
http://localhost:4000/restaurant/
```

> Get individual restaurant details based on id
```
http://localhost:4000/restaurant/:_id
```

> Get restaurant details based on search string
```
http://localhost:4000/restaurant/search
```

- Menu
> Get all list menu based on id
```
http://localhost:4000/menu/list/:_id
```

> Get all menu images based on id
```
http://localhost:4000/menu/image/:_id
```

- Order
> Get all orders based on id
```
http://localhost:4000/order/:_id
```

> Add new order
```
http://localhost:4000/order/new/:_id
```

- Payments -> razorpay
- Reviews
> Get all review
```
http://localhost:4000/reviews/:resid
```

> Add new food review/rating
```
http://localhost:4000/reviews/new
```

> Delete food review/rating
```
http://localhost:4000/reviews/delete/:_id
```

- User
> Get user data
```
http://localhost:4000/user/:_id
```

> update user id
```
http://localhost:4000/user/update/:userId
```

- Image
> Get Image details
```
http://localhost:4000/image/:_id
```

> Uploads given image to S3 bucket, and saves file link to mongodb
```
http://localhost:4000/image/
```