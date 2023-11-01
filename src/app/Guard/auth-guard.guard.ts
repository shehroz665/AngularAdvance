import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'

export const authGuardGuard: CanActivateFn = (route, state) => {
  const path= route.url[0].path;
  let roleId=1;
  const router=inject(Router);
  console.log(path);
  
  if(roleId===1){
    return true;
  }
  else{
    if(path==='edit'){
      router.navigate(['access-denied']);
      return false;
    }
    else{
      return true;   
    }

  }
};
