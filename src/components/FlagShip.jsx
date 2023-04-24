import React from "react";
import { flagshipEvents } from "../data";
import EventCard from "./EventCard";
const FlagShip = () => {
    return (
        <section className="mx-auto">
            {flagshipEvents.map((events) => { return <EventCard url={events.url} desc={events.desc} name={events.name} fee={events.fee} reg={events.reg} date={events.date} /> })}
        </section>
    )
}


export default FlagShip;