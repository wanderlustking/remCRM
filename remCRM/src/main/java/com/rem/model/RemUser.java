package com.rem.model;

import javax.persistence.*;

@Entity
@Table(name = "rem_users",schema = "remcrmdb")
public class RemUser {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_rem_user",nullable = false,unique = true)
    private int idRemUser;

    @Column(name = "user_name",nullable = false)
    private String userName;

    @Column(name = "user_email",nullable = false,unique = true)
    private String userEmail;

    @Column(name = "user_password",nullable = false)
    private String userPassword;

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public int getIdRemUser() {
        return idRemUser;
    }

    public void setIdRemUser(int idRemUser) {
        this.idRemUser = idRemUser;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userSename) {
        this.userEmail = userSename;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RemUser remUsers = (RemUser) o;

        if (idRemUser != remUsers.getIdRemUser()) return false;
        if (userName != null ? !userName.equals(remUsers.getUserName()) : remUsers.getUserName() != null) return false;
        if (userEmail != null ? !userEmail.equals(remUsers.getUserEmail()) : remUsers.getUserEmail() != null) return false;
        if (userPassword != null ? !userPassword.equals(remUsers.getUserPassword()) : remUsers.getUserPassword() != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idRemUser;
        result = 31 * result + (userName != null ? userName.hashCode() : 0);
        result = 31 * result + (userEmail != null ? userEmail.hashCode() : 0);
        result = 31 * result + (userPassword != null ? userPassword.hashCode() : 0);
        return result;
    }

}
