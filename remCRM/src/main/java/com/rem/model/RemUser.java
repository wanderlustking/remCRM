package com.rem.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
//import org.apache.bval.constraints.Email;
//import org.apache.bval.constraints.NotEmpty;


import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "rem_users")
@ToString()
@EqualsAndHashCode()
public class RemUser {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_rem_user",nullable = false,unique = true)
    @Getter @Setter
    private int idRemUser;

//    @Size(min = 1,max = 5)
    @Column(name = "user_name",nullable = false)
    @Getter @Setter
    private String userName;

//    @Email(message = "Format of email is incorrect")
    @Size(min = 1,max = 5)
    @Column(name = "user_email",nullable = false,unique = true)
    @Getter @Setter
    private String userEmail;

//    @Size(min = 1,max = 5)
    @Column(name = "user_password",nullable = false)
    @Getter @Setter
    private String userPassword;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_has_roles", joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "role_id") })
    @JsonIgnore
    @Getter @Setter
    private List<RemRole> roles;

    public RemUser() {
    }

    public RemUser(String userName, String userEmail, String userPassword, List<RemRole> roles) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.roles = roles;
    }
}
