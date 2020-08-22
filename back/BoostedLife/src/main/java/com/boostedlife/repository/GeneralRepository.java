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

    @Query(value = "SELECT name, money, bank, job, CONCAT(firstname, ' ', lastname) as full_name, phone_number\n"
            + "FROM users\n"
            + "WHERE name = :name", nativeQuery = true)
    List<Object[]> inforDelUsuario(@Param("name") String name);
}
