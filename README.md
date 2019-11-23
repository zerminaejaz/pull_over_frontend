# Roadside Assistance - "Pull Over"

Pull Over is an application where Users post problems they are having on the road for nearby users to assist them.


- Utilized Ruby on Rails to rapidly develop and deploy application using MVC framework
- Used JWT authorization to secure a single flow of data and helped verify the user by checking request signatures
- Utilized React MapBox GL with Geolocation API to render an interactive map for users to visualize what posts are nearby
and generate a specific Google Map search query
- Implemented React.js to create reusable UI components and increase app flexibility for future additions
- Utilized Redux to create a single source of truth while handling multiple concurrent forms for submission.
- Designed the User Interface with Bulma CSS Framework and Javascript to create a modern, smooth UI

## Installation

```
cd pull_over_frontend
npm install && npm start
```

## Usage

```javascript

```

## Tech/Frameworks Used

- [MapBox-GL](https://github.com/mapbox/mapbox-gl-js)
- [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Bulma](https://bulma.io/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Here are some issues that need to be resolved:

- When signed in user creates a post, rerender is not forced
- Add the ability for a user to delete their account

### Desired features to add:

- Add switch for user to decide whether to have their phone number visible to others or not

## License
