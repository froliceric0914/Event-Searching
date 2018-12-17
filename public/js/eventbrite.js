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

  async queryAPI(eventName, category, location, localWithin) {
    const getURL = `https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&expand=organizer,venue&sort_by=${
      this.orderby
    }&categories=${category}&location.address=${location}&location.within=${localWithin}&token=${
      this.auth_token
    }`;
    const eventsResponse = await fetch(getURL); //handle the location
    console.log("getURL", getURL);
    // Wait for response and return as json

    const events = await eventsResponse.json();
    console.log("events of query", events);
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
