// Example: Dynamically load events from an array
const events = [
  {
    title: "IGNITE Kick Off!!",
    date: "September 4th, 7-8PM",
    img: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Wednesday night kickoff party",
  },
  {
    title: "Fall Party",
    date: "October 6th, 4-7PM",
    img: "https://images.unsplash.com/photo-1516700675895-b2e35cae333c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fall party with a progressive dinner/hayride",
  },
  {
    title: "Christmas Party",
    date: "December 11th, 6-8PM",
    img: "https://images.unsplash.com/photo-1544277879-42659615e478?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Christmas Party!!",
  },
];
function menuHandler() {
  document.querySelector("#open-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
  });

  document.querySelector("#close-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

  // Close the nav menu if any link inside the wrapper is clicked
  document.querySelector("header nav .wrapper").addEventListener("click", (event) => {
    if (event.target.tagName === 'A') {
      document.querySelector("header nav .wrapper").classList.remove("nav-open");
    }
  });
}


function renderEvents() {
  const eventList = document.getElementById("events");
  if (!eventList) {
    console.error('Element with ID "events" not found.');
    return;
  }
  events.forEach((event) => {
    const eventItem = document.createElement("div");
    eventItem.className = "event-item";
    eventItem.innerHTML = `
      <img src="${event.img}" alt="${event.title}">
      <h4>${event.title}</h4>
      <p class="event-date">${event.date}</p>
      <p class="event-desc">${event.description}</p>
    `;
    eventList.appendChild(eventItem);
  });
}


document.addEventListener("DOMContentLoaded", renderEvents);
menuHandler();
