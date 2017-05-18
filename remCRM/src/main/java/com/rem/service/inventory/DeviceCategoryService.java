package com.rem.service.inventory;

import com.rem.dao.repository.inventory.DeviceCategoryRepository;
import com.rem.model.inventory.DeviceCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Maksym Kmets on 5/18/2017.
 */
@Service
public class DeviceCategoryService {

    @Autowired
    private DeviceCategoryRepository deviceCategoryRepository;

    public DeviceCategory createDeviceCategory(DeviceCategory category){
        return deviceCategoryRepository.save(category);
    }
}
