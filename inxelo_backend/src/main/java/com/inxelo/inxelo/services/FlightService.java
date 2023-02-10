package com.inxelo.inxelo.services;

import com.inxelo.inxelo.DTOs.request.FlightRequestDto;
import com.inxelo.inxelo.DTOs.response.FlightResponseDto;

import java.util.Set;

public interface FlightService {

    Set<FlightResponseDto> getAll();

    FlightResponseDto add(FlightRequestDto flightRequestDto);

    FlightResponseDto update(String key, FlightRequestDto flightRequestDto);

    void deleteByKey(String key);
}
