package com.rem.integration.service.inventory;

import com.rem.integration.service.util.InventoryFactory;
import com.rem.integration.service.util.factory.AbstractInventoryFactory;
import com.rem.model.inventory.DeviceCategory;
import com.rem.service.inventory.DeviceCategoryService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Maksym Kmets on 5/18/2017.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
        "classpath:dispather-servlet.xml",
        "classpath:database-config.xml"})
@Transactional
public class DeviceCategoryTest {
    private AbstractInventoryFactory inventoryFactory;
    @Before
    public void init(){
        inventoryFactory = new InventoryFactory();
    }
    @Test
    public void createCategoryTest(){
        DeviceCategory category = deviceCategoryService.createDeviceCategory(inventoryFactory.createDeviceCategory("Memory"));
        Assert.assertEquals("Memory",category.getCategoryName());
    }
    @Test
    public void editCategory(){
    }
    @Test
    public void deleteCategory(){

    }
    @Test
    public void selectCategory(){

    }

    @Autowired
    private DeviceCategoryService deviceCategoryService;

}
