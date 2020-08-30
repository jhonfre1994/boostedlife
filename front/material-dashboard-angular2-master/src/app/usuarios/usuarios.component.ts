import { Component, OnInit } from '@angular/core';
import { UsaurioService } from './usaurio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdentifiresAndNamUseresDTO } from 'app/model/IdentifiresAndNamUseresDTO';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsrUsuarioDTO } from 'app/model/UsrUsuarioDTO';
import { UsrRolDTO } from 'app/model/UsrRolDTO';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsaurioService]
})
export class UsuariosComponent implements OnInit {
  userForm: FormGroup;
  public usuarios: Array<UsrUsuarioDTO> = [];
  public usersIdentifiers: Array<IdentifiresAndNamUseresDTO> = [];
  public usuariosdto: UsrUsuarioDTO = new UsrUsuarioDTO;
  public rolesList: Array<UsrRolDTO> = [];
  public rolesSelected: Array<UsrRolDTO> = [];

  constructor(private usaurioService: UsaurioService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();

    this.rolesListServer();
    this.listarUsuarios();
    this.namesAndIdentifiers();
  }

  public initForm() {
    this.userForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      nombreUsuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      idSteam: ['', Validators.required],
      roles:['', Validators.required]
    })

    this.userForm.get('contraseña').valueChanges.subscribe(val => {
      if (this.usuariosdto.idUsuario != undefined || this.usuariosdto.idUsuario != null) {
        this.userForm.get('contraseña').setValidators(null);
      } else {
        this.userForm.get('contraseña').setValidators(Validators.required);
      }
    });
  }

  listarUsuarios() {
    this.usuarios = [];
    this.usaurioService.listarUsuarios().subscribe(res => {
      if (res != null) {
        console.log(res);
        this.usuarios = res;
      }
    },
    error => {
      this.openSnackBar(error.error.message, "ERROR");
    })
  }

  namesAndIdentifiers() {
    this.usaurioService.namesAnsIdentifiresUsers().subscribe(res => {
      if (res != null) {
        this.usersIdentifiers = res;
      }
    },
    error => {
      this.openSnackBar(error.error.message, "ERROR");
    })
  }

  saveUser() {
    if (this.usuariosdto.idUsuario == undefined) {
      this.usuariosdto.idUsuario = 0;
    }
    this.usuariosdto.nombres = this.userForm.get('nombres').value;
    this.usuariosdto.apellidos = this.userForm.get('apellidos').value;
    this.usuariosdto.nombreUsuario = this.userForm.get('nombreUsuario').value;
    this.usuariosdto.contrasena = this.userForm.get("contraseña").value;
    this.usuariosdto.identifier = this.userForm.get('idSteam').value.identifies;
    this.usuariosdto.roles = this.rolesSelected;
    console.log(this.usuariosdto)
    this.usaurioService.saveUser(this.usuariosdto).subscribe(res => {
      if (res != null) {
        console.log(res);
        this.usuariosdto = new UsrUsuarioDTO();
        this.userForm.reset()
        this.listarUsuarios();
        this.openSnackBar("Usuario guardado correctamente", "BIEN");
      }
    },
    error => {
      this.openSnackBar(error.error.message, "ERROR");
    })
  }

  editUser(item: UsrUsuarioDTO) {
    console.log(item);
    this.usuariosdto.idUsuario = item.idUsuario;
    this.userForm.get('nombres').setValue(item.nombres);
    this.userForm.get('apellidos').setValue(item.apellidos);
    this.userForm.get('nombreUsuario').setValue(item.nombreUsuario);
    this.userForm.get('contraseña').setValue(item.contrasena);
    this.userForm.controls['idSteam'].setValue(this.usersIdentifiers.find(x => x.identifies === item.identifier));
    this.userForm.get('contraseña').setValue("");
    let roles = new Array<String>()
    item.roles.forEach(element => {
      roles.push(element.nombre)
    });
    this.userForm.get('roles').setValue(roles);


    console.log(this.userForm.value)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  rolesListServer(){
    this.usaurioService.rolList().subscribe( res => {
      if(res != null){
        this.rolesList = res;
        console.log(res);
      }
    })
  }

  rolSelect(event, causa: UsrRolDTO) {
    console.log(event,causa)
    if (event.source.selected) {
      this.rolesSelected.push(causa);
    } else {
      this.rolesSelected.splice(this.rolesSelected.indexOf(causa), 1)
    }
    console.log(this.rolesSelected)
  }


}
