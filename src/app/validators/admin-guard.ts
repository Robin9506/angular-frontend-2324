import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  
    const router: Router = inject(Router);
    // const authService: AuthService = inject(AuthService);

    // authService.isAdmin();
    return true;
  
  }