import { Component, OnInit } from '@angular/core';
import { UsaurioService } from './usaurio.service';
import { UsuariosServerDTO } from 'app/model/UsuariosServerDTO';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdentifiresAndNamUseresDTO } from 'app/model/IdentifiresAndNamUseresDTO';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsaurioService]
})
export class UsuariosComponent implements OnInit {
  userForm: FormGroup;
  public usuarios: Array<UsuariosServerDTO> = [];
  public usersIdentifiers: Array<IdentifiresAndNamUseresDTO> = [];
  public usuariosdto: UsuariosServerDTO = new UsuariosServerDTO;


  constructor(private usaurioService: UsaurioService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();


    this.listarUsuarios();
    this.namesAndIdentifiers();
  }

  public initForm() {
    this.userForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      nombreUsuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      idSteam: ['', Validators.required]
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
    this.usuariosdto.nombreUsuarios = this.userForm.get('nombreUsuario').value;
    this.usuariosdto.contrasena = this.userForm.get("contraseña").value;
    this.usuariosdto.identifier = this.userForm.get('idSteam').value.identifies;
    console.log(this.usuariosdto)
    this.usaurioService.saveUser(this.usuariosdto).subscribe(res => {
      if (res != null) {
        console.log(res);
        this.usuariosdto = new UsuariosServerDTO();
        this.userForm.reset()
        this.listarUsuarios();
        this.openSnackBar("Usuario guardado correctamente", "BIEN");
      }
    },
    error => {
      this.openSnackBar(error.error.message, "ERROR");
    })
  }

  editUser(item: UsuariosServerDTO) {
    this.usuariosdto.idUsuario = item.idUsuario;
    this.userForm.get('nombres').setValue(item.nombres);
    this.userForm.get('apellidos').setValue(item.apellidos);
    this.userForm.get('nombreUsuario').setValue(item.nombreUsuarios);
    this.userForm.get('contraseña').setValue(item.contrasena);
    this.userForm.controls['idSteam'].setValue(this.usersIdentifiers.find(x => x.identifies === item.identifier));
    console.log(this.usuariosdto)
    this.userForm.get('contraseña').setValue(item.nombres);
    console.log(this.userForm.value)
  }

  filterListCareUnit(val) {
    console.log(val);
    this.usersIdentifiers = this.usersIdentifiers.filter((unit) => unit.name.indexOf(val) > -1);
    console.log(this.usersIdentifiers)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
