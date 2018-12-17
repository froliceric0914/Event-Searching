// Instanciate both class
//TODO: refactor by using Ajax

const eventbrite = new EventBrite();
const ui = new UI();

// Listener for the submit button
document.getElementById("submitBtn").addEventListener("click", e => {
  e.preventDefault();

  // get values from form $("event-name")
  const eventName = $("#event-name").val();
  const category = $("#category").val();
  const location = $("#location").val();
  const localWithin = $("#local-within").val();
  //   console.log(eventName + " : " + category + ", " + location);
  console.log("test", localWithin);

  if (eventName !== "") {
    // Query Event Brite API

    eventbrite
      .queryAPI(eventName, category, location, localWithin)
      .then(events => {
        // Check for events
        // console.log("events of query", events);
        const eventsList = events.events.events;
        // console.log(eventsList);
        if (eventsList.length > 0) {
          // Print the events
          ui.displayEvents(eventsList);
        } else {
          // There are no events, print a message
          ui.printMessage(
            "No Results Found",
            "text-center alert alert-danger mt-4"
          );
        }
      });
  } else {
    // Print a message
    ui.printMessage(
      "Add an Event or City",
      "text-center alert alert-danger mt-3"
    );
  }
});
