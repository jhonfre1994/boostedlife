/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.service;

import com.boostedlife.dto.IdentifiresAndNamUseresDTO;
import com.boostedlife.dto.UsuariosServerDTO;
import com.boostedlife.entity.UsuariosServer;
import com.boostedlife.exceptions.responses.BadRequestException;
import com.boostedlife.repository.GeneralRepository;
import com.boostedlife.repository.UsuariosServerRepository;
import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author jhonfre
 */
@Service
public class UsuariosServiceImpl implements UsuariosService {

    @Autowired
    private UsuariosServerRepository usuariosServerRepository;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private GeneralRepository generalRepository;

    @Override
    public List<UsuariosServerDTO> listarUsuarios() {
        List<UsuariosServer> usuarios = usuariosServerRepository.findAll();
        List<UsuariosServerDTO> res = new ArrayList<>();
        if (usuarios != null && !usuarios.isEmpty()) {
            for (UsuariosServer usuario : usuarios) {
                UsuariosServerDTO item = new UsuariosServerDTO();
                item = mapper.map(usuario, UsuariosServerDTO.class);
                item.setContrasena("");
                res.add(item);
            }
            return res;
        }
        throw new BadRequestException("No hay usuarios registrados");
    }

    @Override
    public List<IdentifiresAndNamUseresDTO> namesAndIdentifiresUsers() {
        List<Object[]> usuarios = generalRepository.identifierAndNameUsers();
        List<IdentifiresAndNamUseresDTO> res = new ArrayList<>();
        if (usuarios != null && !usuarios.isEmpty()) {
            for (int i = 0; i < usuarios.size(); i++) {
                IdentifiresAndNamUseresDTO item = new IdentifiresAndNamUseresDTO();
                item.setName((String) usuarios.get(i)[0]);
                item.setIdentifies((String) usuarios.get(i)[1]);

                res.add(item);
            }
            return res;
        }
        throw new BadRequestException("No hay usuarios registrados en el servidor");
    }

    @Override
    @Transactional
    public UsuariosServerDTO guardarUsuarioServer(UsuariosServerDTO dto) {
        UsuariosServer res = new UsuariosServer();
        if (dto.getNombres().isEmpty() || dto.getApellidos().isEmpty() || dto.getIdentifier().isEmpty()
                || dto.getNombreUsuarios().isEmpty()) {
            throw new BadRequestException("Error al guardar el usuario");
        }

        try {
            res = usuariosServerRepository.save(mapper.map(dto, UsuariosServer.class));

            if (res == null) {
                throw new BadRequestException("ERROR");
            }
        } catch (Exception e) {
            System.out.println(e);
            throw new BadRequestException("El id steam ya esta asignado a otro usuario");
        }

        return mapper.map(res, UsuariosServerDTO.class);
    }

}
