/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.service;

import com.boostedlife.dto.IdentifiresAndNamUseresDTO;
import com.boostedlife.dto.UsuariosServerDTO;
import java.util.List;

/**
 *
 * @author jhonfre
 */
public interface UsuariosService {
    
    List<UsuariosServerDTO> listarUsuarios();
    
    List<IdentifiresAndNamUseresDTO> namesAndIdentifiresUsers();
    
    UsuariosServerDTO guardarUsuarioServer(UsuariosServerDTO dto);
    
}
