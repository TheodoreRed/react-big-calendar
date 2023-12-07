import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import "./App.css";

const localizer = momentLocalizer(moment);

interface MyEvent extends Event {
  title: string;
  description: string;
}

const myEventsList: MyEvent[] = [
  {
    start: new Date(2023, 11, 7),
    end: new Date(2023, 11, 7),
    title: "1st Full day to work on project",
    description: "Family gathering and gift exchange",
  },
  {
    start: new Date(2023, 11, 25), // December 25, 2023
    end: new Date(2023, 11, 25),
    title: "Christmas Day",
    description: "Family gathering and gift exchange",
  },
];

function App() {
  const [event, setEvent] = useState<MyEvent | null>(null);

  function clickHandler(e: MyEvent) {
    console.log(e.title, e.description);
    setEvent(e);
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={["month", "agenda"]}
        onSelectEvent={(e) => clickHandler(e)}
      />
      {event && (
        <div className="eventContainer">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <button onClick={() => setEvent(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
