package com.rem.model;


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

@Entity
@Table(name = "rem_users",schema = "remcrmdb")
@ToString(exclude="id")
@EqualsAndHashCode(exclude="id")
public class RemUser {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_rem_user",nullable = false,unique = true)
    @Getter @Setter
    private int idRemUser;

    @Size(min = 1,max = 5)
    @Column(name = "user_name",nullable = false)
    @Getter @Setter
    private String userName;

//    @Email(message = "Format of email is incorrect")
    @Size(min = 1,max = 5)
    @Column(name = "user_email",nullable = false,unique = true)
    @Getter @Setter
    private String userEmail;

    @Size(min = 1,max = 5)
    @Column(name = "user_password",nullable = false)
    @Getter @Setter
    private String userPassword;

}
