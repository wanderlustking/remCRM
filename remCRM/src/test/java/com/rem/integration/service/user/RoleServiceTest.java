package com.rem.integration.service.user;

import com.rem.model.RemRole;
import com.rem.service.RemRoleService;
import com.rem.service.RemUserService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
    "classpath:dispather-servlet.xml",
    "classpath:database-config.xml"})

public class RoleServiceTest {

    @Autowired
    private RemUserService remUserService;
    @Autowired
    private RemRoleService remRoleService;

    @Test
    public void testRoleCrud() {
        RemRole newRemRole = new RemRole("Test_Admin");
        RemRole remRole = remRoleService.createRemRole(newRemRole);
        Assert.assertEquals("Test_Admin", remRole.getName());
        remRole.setName("Test_Manager");
        remRole = remRoleService.updateRemRole(remRole);
        Assert.assertEquals("Test_Manager", remRole.getName());
        remRoleService.deleteRemRole(remRole.getIdRemRole());
        remRole = remRoleService.findRemRole(remRole.getIdRemRole());
        Assert.assertNull(remRole);
    }
}
