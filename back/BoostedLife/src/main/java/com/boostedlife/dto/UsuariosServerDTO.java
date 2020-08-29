/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author jhonfre
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuariosServerDTO {
    
    private Integer idUsuario;
    private String nombres;
    private String apellidos;
    private String nombreUsuarios;
    private String contrasena;
    private String identifier;

}
