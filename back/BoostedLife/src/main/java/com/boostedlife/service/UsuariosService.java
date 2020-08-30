/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.service;

import com.boostedlife.dto.IdentifiresAndNamUseresDTO;
import com.boostedlife.dto.UsrRolDTO;
import com.boostedlife.dto.UsrUsuariosDTO;
import java.util.List;

/**
 *
 * @author jhonfre
 */
public interface UsuariosService {
    
    List<UsrUsuariosDTO> listarUsuarios();
    
    List<IdentifiresAndNamUseresDTO> namesAndIdentifiresUsers();
    
    UsrUsuariosDTO guardarUsuarioServer(UsrUsuariosDTO dto);
    
    List<UsrRolDTO> listRoles();
    
}
