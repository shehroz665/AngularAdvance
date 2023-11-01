import { CanActivateFn } from '@angular/router';

export const deactiveAuthGuard: CanActivateFn = (route, state) => {
  let response =confirm("Are you sure to leave this page");
  if(response===true){
    return true;
  }
  else{
    return false;
  }
};
