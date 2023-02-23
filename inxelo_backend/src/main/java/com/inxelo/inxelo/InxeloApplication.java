package com.inxelo.inxelo;

import com.inxelo.inxelo.DTOs.request.FlightRequestDto;
import com.inxelo.inxelo.services.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.Random;

@SpringBootApplication
public class InxeloApplication {

//    @Autowired
//    private final FlightService flightService;
//
//    public InxeloApplication(FlightService flightService) {
//        this.flightService = flightService;
//    }


    public static void main(String[] args) {
        SpringApplication.run(InxeloApplication.class, args);
    }

//    @PostConstruct
//    private void init() {
//
//        for (int i = 0; i < 1000; i++) {
//            Random rnd = new Random();
//
//            FlightRequestDto flight = new FlightRequestDto("A" + rnd.nextInt(0, 1000),
//                    "A5-" + rnd.nextInt(0, 1000), "2023-02-27T17:49:42.000Z",
//                    "2023-02-27T17:49:42.000Z", "OU" + (rnd.nextInt(0, 1000)));
//
//            flightService.add(flight);
//        }
//    }
}
