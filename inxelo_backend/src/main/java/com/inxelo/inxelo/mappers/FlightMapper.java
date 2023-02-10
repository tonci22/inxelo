package com.inxelo.inxelo.mappers;

import com.inxelo.inxelo.DTOs.request.FlightRequestDto;
import com.inxelo.inxelo.DTOs.response.FlightResponseDto;
import com.inxelo.inxelo.domain.Flight;
import org.mapstruct.Mapper;

import java.util.Set;

@Mapper(componentModel = "spring")
public interface FlightMapper {

    Set<FlightResponseDto> mapToDto(Set<Flight> flights);

    Flight MapToDto(FlightRequestDto flightRequestDto);

    FlightResponseDto mapToDto(Flight flight);
}
