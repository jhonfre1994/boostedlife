/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.service;

import com.boostedlife.dto.GeneralDTO;
import com.boostedlife.entity.Users;
import com.boostedlife.repository.GeneralRepository;
import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
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
        }
        return res;
    }

}
