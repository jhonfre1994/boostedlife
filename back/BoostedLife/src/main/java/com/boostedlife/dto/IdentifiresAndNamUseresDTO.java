/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.asm.Advice;

/**
 *
 * @author jhonfre
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IdentifiresAndNamUseresDTO {
    
    private String name;
    private String identifies;
    
}
