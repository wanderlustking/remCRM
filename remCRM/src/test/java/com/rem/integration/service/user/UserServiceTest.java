package com.rem.integration.service.user;

import com.rem.model.RemRole;
import com.rem.model.RemUser;
import com.rem.service.RemRoleService;
import com.rem.service.RemUserService;
import org.hibernate.SessionFactory;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;


import java.util.ArrayList;
import java.util.List;

/**
 * Created by Maks Testym Kmets on 5/6/2017.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
        "classpath:dispather-servlet.xml",
        "classpath:database-config.xml"
})

public class UserServiceTest {

    @Autowired
    private RemUserService remUserService;

    @Autowired
    private RemRoleService remRoleService;

    private int roleId;
    private int userId;

    @Before
    public void init() {
        roleId = remRoleService.createRemRole(new RemRole("Test_Manager")).getIdRemRole();
        userId=createTestUser("Test_George","test@mail.com").getIdRemUser();
    }

    private RemUser createTestUser(String name,String email){
        RemRole role=remRoleService.findRemRole(roleId);
        List<RemRole> roles= new ArrayList<RemRole>();
        roles.add(role);
        return remUserService.createRemUser(new RemUser(name, email, "1111", roles));
    }

    @Test
    @Transactional
    public void testCreateUser() {
        System.out.println("create user test:");
        RemUser user=createTestUser("Maks Test","test2@mail.com");
        Assert.assertEquals("Maks Test", user.getUserName());
        Assert.assertEquals("Test_Manager", user.getRoles().get(0).getName());
        int currentRoleId=user.getRoles().get(0).getIdRemRole();
        int currentUserId=user.getIdRemUser();
        remUserService.deleteRemUser(user.getIdRemUser());
        Assert.assertNull(remUserService.findRemUser(currentUserId));
        Assert.assertNotNull(remRoleService.findRemRole(currentRoleId));
    }

    @Test
    @Transactional
    public void testUpdateUser() throws Exception {
        RemUser user = remUserService.findRemUser(userId);
        user.setUserName("Test_George");
        System.out.println("START");
        user = remUserService.updateRemUser(user);
        Assert.assertEquals("Test_George", user.getUserName());
        Assert.assertEquals("Test_Manager", user.getRoles().get(0).getName());
    }

    @After
    public void destroy(){
        remRoleService.deleteRemRole(roleId);
        remUserService.deleteRemUser(userId);
    }
}
