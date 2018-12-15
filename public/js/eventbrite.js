/*

fetch the data (query from the API)

*/

class EventBrite {
  // Constructor when instanciate
  constructor() {
    this.auth_token = "25ZVHBJBUGPPTEWGEP5W";
    this.orderby = "date";
    //     console.log(this.auth_token);
  }

  // Get the Events from API

  async queryAPI(eventName, category, location) {
    const eventsResponse = await fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${
        this.orderby
      }&categories=${category}&location.address=${location}&token=${
        this.auth_token
      }`
    ); //handle the location

    // Wait for response and return as json

    const events = await eventsResponse.json();

    return {
      events
    };
  }

  // Get categories from API
  async getCategoriesAPI() {
    // Query the API
    const categoriesResponse = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`
    );

    // Hold for the response and then return as json
    const categories = await categoriesResponse.json();

    return {
      categories
    };
  }
}
