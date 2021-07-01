import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'digit'
})
export class DigitPipe implements PipeTransform {
    transform(value: number, ...args: any[]) {
        let numStr: string = value.toString();
        let newStr = '';
        let start = numStr.length;

        while(start >= 3) {
            let str = start - 3 >= 3 ? '.' : ''; 
                str += numStr.substr(start-3, 3);
            console.log(str);
            
            newStr = str + newStr;
            start -= 3;
        }

        console.log(start);
        
        if (start > 0) newStr = numStr.substr(0, start) + '.' + newStr;

        return newStr;//.substr(1, 1) + '.' + newStr.substr(2, newStr.length - 1);
    }
}