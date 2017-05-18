package com.rem.model.inventory;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

/**
 * Created by Maksym Kmets on 5/18/2017.
 */
@Entity
@Table(name = "categories")
@ToString()
@EqualsAndHashCode()
public class DeviceCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    @Getter @Setter
    private int idCategory;

    @Column(name = "name")
    @Getter @Setter
    private String categoryName;

    public DeviceCategory() {
    }

    public DeviceCategory(String categoryName) {
        this.categoryName = categoryName;
    }
}
