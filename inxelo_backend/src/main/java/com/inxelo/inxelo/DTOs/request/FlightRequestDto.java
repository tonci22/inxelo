package com.inxelo.inxelo.DTOs.request;

import lombok.Value;

@Value
public class FlightRequestDto {
    String aircraftRegistration;
    String aircraftType;
    String dateArrival;
    String dateDeparture;
    String flightNumber;
}
