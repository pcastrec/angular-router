import { Service, signal } from '@angular/core';

@Service()
export class AuthService {
    private mailValid = "admin@test.fr"
    private passwordValid = "@ngul@r!"

    private _user = signal<string>("")
    user = this._user.asReadonly()

    login(data: { email: string, password: string }): boolean {

        if (data.email === this.mailValid && data.password === this.passwordValid) {
            this._user.set(data.email)
            return true
        }
        return false
    }

    logout() {
        this._user.set("")
    }

}
