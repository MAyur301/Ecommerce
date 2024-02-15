import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
  providedIn:'root'
})
export class loginauth implements CanActivate {
  constructor(private route:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(sessionStorage.getItem('authkey') === 'true')
    {
      return true;
    }
    else{
      this.route.navigate(['/login'])
      return false;
    }

  }

}
