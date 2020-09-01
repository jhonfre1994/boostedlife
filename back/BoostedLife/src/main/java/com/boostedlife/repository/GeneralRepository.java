/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.repository;

import com.boostedlife.entity.Users;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author jhonfre
 */
@Repository
public interface GeneralRepository extends JpaRepository<Users, Integer> {

    @Query(value = "SELECT name, money, bank, job, CONCAT(firstname, ' ', lastname) as full_name, phone_number, identifier\n"
            + "FROM users\n"
            + "WHERE  identifier = (select identifier from usr_usuario WHERE nombre_usuario = :username)", nativeQuery = true)
    List<Object[]> inforDelUsuario(@Param("username") String name);

    @Query(value = "SELECT * FROM owned_vehicles\n"
            + "where owner= :id", nativeQuery = true)
    List<Object[]> vehiclesOwned(@Param("id") String id);

    @Query(value = "SELECT * FROM owned_properties\n"
            + "where owner= :id", nativeQuery = true)
    List<Object[]> propertiesOwned(@Param("id") String id);

    @Query(value = "SELECT name, identifier\n"
            + "FROM users\n"
            + "order by name asc", nativeQuery = true)
    List<Object[]> identifierAndNameUsers();

}
