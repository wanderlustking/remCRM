package com.rem.integration.service.util;

import com.rem.integration.service.util.factory.AbstractInventoryFactory;
import com.rem.model.inventory.DeviceCategory;

/**
 * Created by Maksym Kmets on 5/18/2017.
 */
public class InventoryFactory extends AbstractInventoryFactory {
    public DeviceCategory createDeviceCategory(String categoryName) {
        return new DeviceCategory(categoryName);
    }
}
