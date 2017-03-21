package com.rem.model;

/**
 * Created by Colt on 3/19/2017.
 */
public class RemUser {
    private int idRemUser;
    private String userName;
    private String userSename;

    public RemUser(int idRemUser, String userName, String userSename) {
        this.idRemUser = idRemUser;
        this.userName = userName;
        this.userSename = userSename;
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

    public String getUserSename() {
        return userSename;
    }

    public void setUserSename(String userSename) {
        this.userSename = userSename;
    }
}
