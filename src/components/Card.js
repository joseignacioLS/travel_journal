import React from "react"
import map from "../images/pos-icon.png"
import cal from "../images/cal-icon.png"

export default function Card(props)
{
    let img_url = `./images/${props.item.img_url}`;
    let dates = props.item.end_date ? <p>{props.item.start_date} - {props.item.end_date}</p> : <p>{props.item.start_date}</p>;
    return (
        <div className="card">
            <img src={img_url} className="card--pic"/>
            <div className="card--attr">
                <div className="card--header">                        
                    <div className="card--location">
                        <img src={map} className="card--icon" />
                        <p><a href={props.item.gmapslink} target="_blank">{props.item.location}</a></p>
                    </div>
                    <div className="card--dates">
                        <img src={cal} className="card--icon"/>
                        {dates}
                    </div>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card-desc">{props.item.description}</p>

            </div>
 
        </div>
    )
}