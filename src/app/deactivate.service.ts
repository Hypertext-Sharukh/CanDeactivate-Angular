import { Injectable } from '@angular/core';
import{Deactivate} from './deactivate';
import{CanDeactivate} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DeactivateService  implements CanDeactivate<Deactivate>{

  canDeactivate(component:Deactivate){
    if(component.canNavigate==true){
      return true;
    }
    else{
      if(confirm("do u want  to discard changes?")){
        return true;
      }
      else{
        return false;
      }
    }
  }
}
