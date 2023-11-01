import { CanActivateFn,Router } from '@angular/router';
import {inject} from '@angular/core'

export const loadAuthGuard: CanActivateFn = (route, state) => {
  const path= route.url[0].path;
  const data= Object.values(route.data);
  let roleId=1;
  const router=inject(Router);

  console.log(path,data,state);
  if(data.includes(roleId)){
    return true;
  }
  else{
    router.navigate(['access-denied']);
    return false;
  }
};
