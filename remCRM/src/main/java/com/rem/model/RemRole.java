package com.rem.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

/**
 * Created by Colt on 4/9/2017.
 */
@Entity
@Table(name = "rem_roles")
@ToString()
@EqualsAndHashCode()
public class RemRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_rem_roles")
    @Getter @Setter
    private int idRemRole;

    @Column(name = "role_name")
    @Getter @Setter
    private String name;

    public RemRole() {
    }
    public RemRole(String name) {
        this.name = name;
    }
}

