package tn.bewirelesssolutions.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vehicule")
@Entity
public class Voiture implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private int couleur_rouge;
    private int couleur_vert;
    private int couleur_blue;
    @NonNull
    private String marque;
    @Column(nullable = false,unique = true,length = 12)
    private String matricule;
    @Enumerated(EnumType.STRING)
    private TypeCarburant typeCarburant;
    private double longitude;
    private double laltitude;
    @Temporal(TemporalType.DATE)//DATE="09-06-22"  TIME="09-06-22 09:41:650000 PM"   TIMESTAMP : 2135468482
    private Date dateDeFabrication;
    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    private Conducteur conducteur;

}
