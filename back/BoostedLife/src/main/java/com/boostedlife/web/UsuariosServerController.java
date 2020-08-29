/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.web;

import com.boostedlife.dto.IdentifiresAndNamUseresDTO;
import com.boostedlife.dto.UsrUsuariosDTO;
import com.boostedlife.service.UsuariosService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jhonfre
 */
@RestController
@RequestMapping("/api/v.1/usuarios")
@CrossOrigin(origins = "*")
public class UsuariosServerController {

    @Autowired
    private UsuariosService service;

    @GetMapping("/")
    public ResponseEntity<?> listarUsuarios() {
        List<UsrUsuariosDTO> res = service.listarUsuarios();
        return ResponseEntity.ok(res);
    }

    @GetMapping("/usersAnsNamesUsuers")
    public ResponseEntity<?> usersAnsNamesUsuers() {
        List<IdentifiresAndNamUseresDTO> res = service.namesAndIdentifiresUsers();
        return ResponseEntity.ok(res);
    }

    @PostMapping("/")
    public ResponseEntity<?> guardarUsuario(@RequestBody UsrUsuariosDTO dto) {
        UsrUsuariosDTO res = service.guardarUsuarioServer(dto);
        return ResponseEntity.ok(res);
    }
}
