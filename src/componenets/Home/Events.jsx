import { useEffect, useState } from "react";
import Event from "./Event";


const Events = () => {
    const [events, setEvents]=useState([])

    useEffect(()=>{
        fetch('../../../public/events.json')
        .then(res=> res.json())
        .then (eventsInfo => setEvents(eventsInfo))
    })

    return (
       <div>
        <div>
        <h2 className="text-head text-4xl font-black mt-20 text-center border-t-2 border-green-500 pt-3">We offer our Virtual Health Fair Events across the Country</h2>
        </div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-10 mt-20">
            {
                events.map(event=>{
                    return <Event key={event.id} event={event}></Event>
                })
            }
        </div>
        
       </div>
    );
};

export default Events;