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
 * @author jhon
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UsrRolDTO {
    /**
     * id del rol.
     */
    private Integer idRol;
    /**
     * nombre del rol.
     */
    private String nombre;
}
