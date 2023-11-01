import { CanActivateFn,Router } from '@angular/router';
import {inject} from '@angular/core'

export const loadAuthGuard: CanActivateFn = (route, state) => {
  const path= route.url[0].path;
  let roleId=2;
  const router=inject(Router);
  console.log(path);
  if(roleId===1){
    return true;
  }
  else{
    router.navigate(['access-denied']);
    return false;
  }
};
