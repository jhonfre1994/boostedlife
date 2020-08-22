/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boostedlife.entity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
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
@Entity
@Table(name = "users")
@XmlRootElement
public class Users implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "identifier")
    private String identifier;
    
    @Column(name = "license")
    private String license;
    
    @Column(name = "money")
    private Integer money;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "skin")
    private String skin;
    
    @Column(name = "job")
    private String job;
    
    @Column(name = "job_grade")
    private Integer jobGrade;
    
    @Column(name = "loadout")
    private String loadout;
    
    @Column(name = "position")
    private String position;
    
    @Column(name = "bank")
    private Integer bank;
    
    @Column(name = "permission_level")
    private Integer permissionLevel;
    
    @Column(name = "group")
    private String group;
    
    @Column(name = "firstname")
    private String firstname;
    
    @Column(name = "lastname")
    private String lastname;
    
    @Column(name = "dateofbirth")
    private String dateofbirth;
    
    @Column(name = "sex")
    private String sex;
    
    @Column(name = "height")
    private String height;
    
    @Column(name = "status")
    private String status;
    
    @Column(name = "tattoos")
    private String tattoos;
    
    @Column(name = "is_dead")
    private Boolean isDead;
    
    @Column(name = "last_property")
    private String lastProperty;
    
    @Column(name = "phone_number")
    private String phoneNumber;
    
    @Column(name = "vip")
    private Boolean vip;
    
}
