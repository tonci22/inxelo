package com.inxelo.inxelo.DTOs.response;

import lombok.Value;

@Value
public class FlightResponseDto {
    String key;
    String aircraftRegistration;
    String aircraftType;
    String dateArrival;
    String dateDeparture;
    String flightNumber;
}
