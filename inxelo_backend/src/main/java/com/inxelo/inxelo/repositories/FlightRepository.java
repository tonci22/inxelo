package com.inxelo.inxelo.repositories;

import com.inxelo.inxelo.domain.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, String> {
    Flight findByKeyEquals(String key);
    void deleteByKeyEquals(String key);
}
