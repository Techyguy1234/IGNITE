// Example: Dynamically load events from an array
const events = [
  {
    title: "Fall Party",
    date: "October 6th, 4-7PM",
    img: "https://images.unsplash.com/photo-1516700675895-b2e35cae333c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Hayride and progressive supper at Lena Neuenschwander's house. Dinner provided, friends welcome. 15103 Baumgartner Rd, Dalton, OH 44618",
  },
  {
    title: "Operation Christmas Child Shopping",
    date: "November 13th, 7-8PM",
    img: "https://s3.theark.cloud/sp-comm-arkfiles/website/occ/images/occ-printable-resources/2017/dl/occ-logo-1200x1200.png?_gl=1*76vppw*_gcl_au*MTYyMDQ2MTY2MS4xNzI1ODkzNjI1",
    description: "More details to come",
  },
  {
    title: "Christmas Party",
    date: "December 11th, 5:30-8:30PM",
    img: "https://images.unsplash.com/photo-1544277879-42659615e478?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Christmas party at Mark & Heidi's house. Township Rd. 565, Holmesville, OH 44633",
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
  document
    .querySelector("header nav .wrapper")
    .addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        document
          .querySelector("header nav .wrapper")
          .classList.remove("nav-open");
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
// Existing events and menuHandler code

document.addEventListener("DOMContentLoaded", function () {
  renderEvents();
  menuHandler();

  // Calendar iframe handling
  const calendarFrame = document.getElementById("calendar-frame");

  // URLs for different calendar views
  const mobileCalendarSrc =
    "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&mode=AGENDA&showPrint=0&showTz=0&showDate=0&showTitle=0&src=anJoaWdobWNhQGdtYWlsLmNvbQ&color=%23039BE5";
  const desktopCalendarSrc =
    "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&mode=MONTH&showTitle=0&src=anJoaWdobWNhQGdtYWlsLmNvbQ&color=%23039BE5";

  // Set the calendar iframe src based on screen width
  if (window.innerWidth <= 768) {
    calendarFrame.src = mobileCalendarSrc; // for mobile devices
  } else {
    calendarFrame.src = desktopCalendarSrc; // for desktop devices
  }
});
