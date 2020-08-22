/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.web;

import com.boostedlife.dto.GeneralDTO;
import com.boostedlife.entity.Users;
import com.boostedlife.service.GeneralService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jhonfre
 */
@RestController
@RequestMapping("/api/v.1/consultaGeneral")
public class GeneralController {

    @Autowired
    private GeneralService generalService;

    @GetMapping("/{nombreUsuario}")
    public ResponseEntity<?> inforDelUsuario(@PathVariable("nombreUsuario") String nombreUsuario) {
        GeneralDTO res = generalService.inforDelUsuario(nombreUsuario);
        return ResponseEntity.ok(res);
    }
}
