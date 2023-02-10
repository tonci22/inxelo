package com.inxelo.inxelo.controllers;

import com.inxelo.inxelo.DTOs.request.FlightRequestDto;
import com.inxelo.inxelo.DTOs.response.FlightResponseDto;
import com.inxelo.inxelo.services.FlightService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("api/flights")
@CrossOrigin
@AllArgsConstructor
public class FlightController {

    private final FlightService flightService;

    @GetMapping
    public ResponseEntity<Set<FlightResponseDto>> getAllFlights() {
        return ResponseEntity.ok(flightService.getAll());
    }

    @PostMapping
    public ResponseEntity<FlightResponseDto> createFlight(@RequestBody FlightRequestDto flightRequestDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(flightService.add(flightRequestDto));
    }

    @PutMapping("/{key}")
    public ResponseEntity<FlightResponseDto> updateFlight(@PathVariable("key") String key, @RequestBody FlightRequestDto flightRequestDto) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(flightService.update(key, flightRequestDto));
    }

    @DeleteMapping("/{key}")
    public ResponseEntity<String> deleteFlight(@PathVariable("key") String key) {
        flightService.deleteByKey(key);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Flight deleted");
    }
}
