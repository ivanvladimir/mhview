import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform( value, args ) {
        if (value){
            if ( args && args.length > 0 )  {
                return value.filter((item) =>
                    item.name.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
                    item.description.toLowerCase().indexOf(args.toLowerCase()) > -1
                );
            } else {
                return value.filter((item) => true);
            }
        }else{
            return null;
        }
    }
}
