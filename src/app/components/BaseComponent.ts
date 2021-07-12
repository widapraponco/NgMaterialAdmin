import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injector } from "@angular/core"
import { Observable } from "rxjs";
import { map, shareReplay } from 'rxjs/operators';

export class BaseComponent {
    // public breakpointObserver: BreakpointObserver;

    constructor(injector: Injector, private breakpointObserver: BreakpointObserver) {
        // this.breakpointObserver = injector.get(BreakpointObserver);
    }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}