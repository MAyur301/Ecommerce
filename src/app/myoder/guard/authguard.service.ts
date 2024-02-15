import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class authguard implements CanActivate
{
    constructor(private route:Router)
    {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if(sessionStorage.getItem('authkey') === 'true')
      {
        this.route.navigate(['/dashboard']);
        return false;
      }
        return true;
}
}
