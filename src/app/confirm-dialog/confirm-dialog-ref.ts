import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

export class ConfirmDialogRef {

  private _confirm$ = new Subject<boolean>();
  public confirm$ = this._confirm$.asObservable();

  private _closed$ = new Subject<boolean>();
  private closed$ = this._closed$.asObservable();

  constructor(
    private overlayRef: OverlayRef,
  ) { }

  public close(confirm: boolean) {
    this.overlayRef.dispose();
    this._confirm$.next(confirm);
    this._confirm$.complete();
  }

}
