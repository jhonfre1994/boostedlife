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
@AllArgsConstructor
@NoArgsConstructor
public class GeneralDTO {

    private String nombre;
    private int dineroBolsillo;
    private int dineroBanco;
    private String trabajo;
    private String nombreCompleto;
    private String telefono;

}
