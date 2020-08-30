package com.boostedlife.service;


import com.boostedlife.entity.UsrUsuarios;
import com.boostedlife.exceptions.responses.BadRequestException;
import com.boostedlife.repository.UsrUsuarioRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import org.springframework.security.core.GrantedAuthority;

@Service(value = "userService")
public class AutorizacionImlp implements UserDetailsService {

    @Autowired
    private UsrUsuarioRepository usuarioRepository;


    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        UsrUsuarios user = usuarioRepository.findByNombreUsuario(userId);

        if (user == null) {
            throw new BadRequestException("Nombre de usuario y/o contraseña incorrectos");
        }
//        if (user.getEstado().equals("Activo")) {
        //List<UsrUsuarioRol> roles = rolService.listarRoles(user.getIdUsuario());

        List<GrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getNombre()));
        });

        UserDetails userDetails = new org.springframework.security.core.userdetails.User(user.getNombreUsuario(), user.getContrasena(), authorities);

        return userDetails;
//        }
    }
}
