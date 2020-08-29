/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.repository;

import com.boostedlife.entity.UsrUsuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author jhonfre
 */
@Repository
public interface UsuarioRepository extends JpaRepository<UsrUsuarios, Integer> {

    UsrUsuarios findByNombreUsuario(String username);

}
