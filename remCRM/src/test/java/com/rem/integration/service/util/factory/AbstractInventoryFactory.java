package com.rem.integration.service.util.factory;

import com.rem.model.inventory.DeviceCategory;

/**
 * Created by Maksym Kmets on 5/18/2017.
 */
public abstract class AbstractInventoryFactory{
    public abstract DeviceCategory createDeviceCategory(String name);
}
