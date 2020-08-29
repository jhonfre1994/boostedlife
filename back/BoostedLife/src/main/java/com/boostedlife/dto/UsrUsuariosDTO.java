/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.dto;

import java.util.List;
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
public class UsrUsuariosDTO {
    
    private Integer idUsuario;
    private String nombres;
    private String apellidos;
    private String nombreUsuario;
    private String contrasena;
    private String identifier;
    private List<UsrRolDTO> roles;

}
