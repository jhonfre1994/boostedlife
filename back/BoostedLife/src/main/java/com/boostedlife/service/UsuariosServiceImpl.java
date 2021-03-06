/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.service;

import com.boostedlife.dto.IdentifiresAndNamUseresDTO;
import com.boostedlife.dto.UsrRolDTO;
import com.boostedlife.dto.UsrUsuariosDTO;
import com.boostedlife.entity.UsrRol;
import com.boostedlife.entity.UsrUsuarios;
import com.boostedlife.exceptions.responses.BadRequestException;
import com.boostedlife.repository.GeneralRepository;
import com.boostedlife.repository.UsrRolRepository;
import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.boostedlife.repository.UsrUsuarioRepository;
import java.util.Optional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 *
 * @author jhonfre
 */
@Service
public class UsuariosServiceImpl implements UsuariosService {

    @Autowired
    private UsrUsuarioRepository usuariosServerRepository;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private GeneralRepository generalRepository;

    @Autowired
    private UsrRolRepository rolRepository;

    @Override
    public List<UsrUsuariosDTO> listarUsuarios() {
        List<UsrUsuarios> usuarios = usuariosServerRepository.findAll();
        List<UsrUsuariosDTO> res = new ArrayList<>();
        if (usuarios != null && !usuarios.isEmpty()) {
            for (UsrUsuarios usuario : usuarios) {
                UsrUsuariosDTO item = new UsrUsuariosDTO();
                item = mapper.map(usuario, UsrUsuariosDTO.class);
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
    public UsrUsuariosDTO guardarUsuarioServer(UsrUsuariosDTO dto) {
        UsrUsuarios res = new UsrUsuarios();
        if (dto.getNombres().isEmpty() || dto.getApellidos().isEmpty() || dto.getIdentifier().isEmpty()
                || dto.getNombreUsuario().isEmpty()) {
            throw new BadRequestException("Error al guardar el usuario");
        }
        try {
            Optional<UsrUsuarios> exist = usuariosServerRepository.findById(dto.getIdUsuario());
            if (exist.isPresent()) {
                if (!dto.getContrasena().isEmpty()) {
                    dto.setContrasena(new BCryptPasswordEncoder().encode(dto.getContrasena()));
                } else {
                    dto.setContrasena(exist.get().getContrasena());
                }
            } else {
                dto.setContrasena(new BCryptPasswordEncoder().encode(dto.getContrasena()));
            }
            res = usuariosServerRepository.save(mapper.map(dto, UsrUsuarios.class));
            if (res == null) {
                throw new BadRequestException("ERROR");
            }
        } catch (Exception e) {
            System.out.println(e);
            throw new BadRequestException("El id steam ya esta asignado a otro usuario");
        }
        return mapper.map(res, UsrUsuariosDTO.class);
    }

    @Override
    public List<UsrRolDTO> listRoles() {
        List<UsrRol> roles = rolRepository.findAll();
        List<UsrRolDTO> res = new ArrayList<>();
        if (roles != null && !roles.isEmpty()) {
            for (UsrRol role : roles) {
                res.add(mapper.map(role, UsrRolDTO.class));
            }
            return res;
        }
        throw new BadRequestException("Error al cargar los roles");
    }

}
