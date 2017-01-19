import { Component, ViewChild } from '@angular/core'
import { ModalDirective } from 'ng2-bootstrap';
import { Location } from '@angular/common'

import { User } from '../model/userModel'
import { UserService } from '../service/user.service'
import { ShareService } from '../service/share.service'

@Component({
    selector: 'userList',
    templateUrl: '../template/UserList.Component.html'
})

export class UserListComponent {
    @ViewChild("userModal") public userModal: ModalDirective;
    @ViewChild("deleteUserModal") public deleteUserModal: ModalDirective;
    user = new User();
    userId: string;
    isAddUser: boolean = true;
    users: User[];
    backupusers: User[];
    constructor(private userService: UserService, private shareService: ShareService, private location: Location) { }

    getUsers(): void {
        this.userService.getUserList().subscribe(users => this.backupUsers(users))
    }

    backupUsers(users) {
        this.users = users;
        this.backupusers = users
    }

    ngOnInit(): void {
        this.getUsers();
        this.shareService.changeTitle("Users");
    }

    addUser() {
        this.isAddUser = true;
        this.user = new User();
        this.userModal.show();
    }

    editUser(userId: string) {
        this.isAddUser = false;
        this.userService.getUser(userId).subscribe(user => this.user = user);
        this.userModal.show();
    }

    onSubmit() {
        this.userModal.hide();
        this.shareService.openLoading();
        if (this.isAddUser) {
            this.userService.addUser(this.user).subscribe(() => this.getUsers());
        }
        else {
            this.userService.editUser(this.user).subscribe(() => this.getUsers());;
        }
        this.shareService.clossLoading();
    }

    shwoDeleteUserModal(id: string) {
        this.userId = id;
        this.deleteUserModal.show();
    }

    deleteUser() {
        this.deleteUserModal.hide();
        this.shareService.openLoading();
        this.userService.deleteUser(this.userId).subscribe(() => this.getUsers());
        this.shareService.clossLoading();

    }
}