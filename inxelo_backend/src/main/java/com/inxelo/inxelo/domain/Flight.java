package com.inxelo.inxelo.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Flight {

    @Id
    @Column(name = "key_id")
    private String key;

    private String aircraftRegistration;
    private String aircraftType;
    private String dateArrival;
    private String dateDeparture;
    private String flightNumber;
}
