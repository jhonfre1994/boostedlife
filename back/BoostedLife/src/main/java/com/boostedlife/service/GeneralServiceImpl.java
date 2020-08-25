/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.service;

import com.boostedlife.dto.GeneralDTO;
import com.boostedlife.dto.OwnedPropertiesDTO;
import com.boostedlife.dto.OwnedVehiclesDTO;
import com.boostedlife.repository.GeneralRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jhonfre
 */
@Service
public class GeneralServiceImpl implements GeneralService {

    @Autowired
    private GeneralRepository generalRepository;

    @Override
    public GeneralDTO inforDelUsuario(String nombreUsuario) {
        GeneralDTO res = new GeneralDTO();
        List<Object[]> usera = generalRepository.inforDelUsuario(nombreUsuario);
        if (usera != null && !usera.isEmpty()) {
            res.setNombre((String) usera.get(0)[0]);
            res.setDineroBolsillo((int) usera.get(0)[1]);
            res.setDineroBanco((int) usera.get(0)[2]);
            res.setTrabajo((String) usera.get(0)[3]);
            res.setNombreCompleto((String) usera.get(0)[4]);
            res.setTelefono((String) usera.get(0)[5]);

            res.setVehicles(vehicles((String) usera.get(0)[6]));
            res.setPropiertes(properties((String) usera.get(0)[6]));
        }
        return res;
    }

    public List<OwnedVehiclesDTO> vehicles(String id) {
        List<OwnedVehiclesDTO> vehiculos = new ArrayList<>();

        List<Object[]> vehicles = generalRepository.vehiclesOwned(id);

        if (vehicles != null && !vehicles.isEmpty()) {

            for (int i = 0; i < vehicles.size(); i++) {
                OwnedVehiclesDTO item = new OwnedVehiclesDTO();
                item.setGarage((String) vehicles.get(i)[6]);
                item.setPlate((String) vehicles.get(i)[1]);
                item.setType((String) vehicles.get(i)[3]);

                vehiculos.add(item);
            }
        }
        return vehiculos;
    }

    public List<OwnedPropertiesDTO> properties(String id) {
        List<OwnedPropertiesDTO> propiedades = new ArrayList<>();

        List<Object[]> propertiesEntity = generalRepository.propertiesOwned(id);

        if (propertiesEntity != null && !propertiesEntity.isEmpty()) {

            for (int i = 0; i < propertiesEntity.size(); i++) {
                OwnedPropertiesDTO item = new OwnedPropertiesDTO();
                item.setName((String) propertiesEntity.get(i)[1]);
                item.setPrice((Double) propertiesEntity.get(i)[2]);

                propiedades.add(item);
            }
        }
        return propiedades;
    }
}
