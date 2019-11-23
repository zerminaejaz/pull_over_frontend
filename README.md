# Roadside Assistance - "Pull Over"

Pull Over is an application where Users can post on-the-road problems with or without an amount of cash they can offer for task completion. Users can view posts nearby and retrieve location of each post via Google Maps.

- Utilized Ruby on Rails to rapidly develop and deploy application using MVC framework
    - Here is the [Rails-Backend](https://github.com/zerminaejaz/pull_over_backend)
- Used JWT authorization to secure a single flow of data and helped verify the user by checking request signatures
- Utilized React MapBox GL with Geolocation API to render an interactive map for users to visualize what posts are nearby
and generate a specific Google Map search query
- Implemented React.js to create reusable UI components and increase app flexibility for future additions
- Utilized Redux to create a single source of truth while handling multiple concurrent forms for submission.
- Designed the User Interface with Bulma CSS Framework and Javascript to create a modern, smooth UI

## Installation

```
npm install && npm start
```

## Tech/Frameworks Used
- [Mapbox-GL-JS](https://docs.mapbox.com/mapbox-gl-js/api/)
- [GeolocationAPI](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Bulma-CSS-framework](https://bulma.io/)

# Screenshots

## Login / Sign Up

![Login / Sign Up](./public/pull_over_login.gif)

## Home Page, Create Post, Edit Post, Delete Post

![Home Page & Create Post](./public/create_post.gif)

## View Posts, Users, Post Location

![View Posts, Users, Post Location](./public/view_posts.gif)

## Account Page

![Account Page](./public/profile_page.gif)

## User's Post History

![Post History](./public/user_posts.gif)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

