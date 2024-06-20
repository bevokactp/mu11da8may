import React, { Component, useState, useEffect } from "react";

import { ppp } from "../mu11da8may_js/src/debug";
import {} from "../mu11da8may_js/src/validators/auth";
import {} from "../mu11da8may_js/src/generate";
import { subtractDateTimes, convertMillisecondsToDaysHoursSeconds } from "../mu11da8may_js/src/datetime";
import { padWithLeadingZeros } from "../mu11da8may_js/src/number";


function getRealTimeToday(hours, minutes, seconds) {
    const now = new Date()
    let datetime_zenit = new Date()
    datetime_zenit.setHours(hours, minutes, seconds);
    const diff = subtractDateTimes(now, datetime_zenit)
    const datetime_delta = convertMillisecondsToDaysHoursSeconds(diff.milliseconds)

    if (datetime_delta.days === 0) {
        hours = datetime_delta.hours
        minutes = datetime_delta.minutes
        seconds = datetime_delta.seconds
    } else {
        hours = 24 + datetime_delta.hours
        minutes = 60 + datetime_delta.minutes
        seconds = 60 + datetime_delta.seconds
    }
    return {
        hours: padWithLeadingZeros(hours, 2),
        minutes: padWithLeadingZeros(minutes, 2),
        seconds: padWithLeadingZeros(seconds, 2),
    }
}

const ZENITH_NEWYEAR_LOCATION = {
    hours: 13,
    minutes: 0,
    seconds: 0,
}


export default class App extends Component { 
    constructor(props){ 
      super(props) 
      this.state = {
        datetime_modern: new Date(),
        time_real: "",
      }
    }

    componentDidMount() {
        this.everySecondUpdateInterval = setInterval(() => {
            
            const real_time_today = getRealTimeToday(
                ZENITH_NEWYEAR_LOCATION.hours,
                ZENITH_NEWYEAR_LOCATION.minutes,
                ZENITH_NEWYEAR_LOCATION.seconds,
            )
            const str_real_time_today = `${real_time_today.hours}:${real_time_today.minutes}:${real_time_today.seconds}`
            
            this.setState({
                datetime_modern: new Date(),
                time_real: str_real_time_today,
            })
        }, 1000) 
    }

    componentWillUnmount() {
        clearInterval(this.everySecondUpdateInterval);
    }

    render(){ 

        return ( 
        <div> 
            <h3>Modern: {this.state.datetime_modern.toString()} </h3>
            <h3>Real: {this.state.time_real}</h3>
        </div> 
      ) 
    }
}  
