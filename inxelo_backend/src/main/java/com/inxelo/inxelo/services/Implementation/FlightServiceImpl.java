package com.inxelo.inxelo.services.Implementation;

import com.inxelo.inxelo.DTOs.request.FlightRequestDto;
import com.inxelo.inxelo.DTOs.response.FlightResponseDto;
import com.inxelo.inxelo.Helpers.RandomKeyGenerator;
import com.inxelo.inxelo.domain.Flight;
import com.inxelo.inxelo.mappers.FlightMapper;
import com.inxelo.inxelo.repositories.FlightRepository;
import com.inxelo.inxelo.services.FlightService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
@Transactional
public class FlightServiceImpl implements FlightService {

    private final FlightRepository flightRepository;
    private final FlightMapper flightMapper;

    @Override
    public Set<FlightResponseDto> getAll() {
        return flightMapper.mapToDto(new HashSet<>(flightRepository.findAll()));
    }

    @Override
    public FlightResponseDto add(FlightRequestDto flightRequestDto) {

        Flight flight = flightMapper.MapToDto(flightRequestDto);
        flight.setKey(RandomKeyGenerator.GenerateKey());

        return flightMapper.mapToDto(flightRepository.save(flight));
    }


    @Override
    public FlightResponseDto update(String key, FlightRequestDto flightRequestDto) {
        if (flightRepository.findByKeyEquals(key) == null)
            throw new RuntimeException("Key not found");

        Flight flight = flightMapper.MapToDto(flightRequestDto);
        flight.setKey(key);

        return flightMapper.mapToDto(flightRepository.save(flight));
    }

    @Override
    public void deleteByKey(String key) {
        if (flightRepository.findByKeyEquals(key) == null)
            throw new RuntimeException("Key not found");
        flightRepository.deleteByKeyEquals(key);

    }
}
