import { Injectable, OnDestroy } from '@angular/core';
import { Observable, scan, Subject } from 'rxjs';

@Injectable()
export class UploadService implements OnDestroy {
    private upload = new Subject<string>();
    private uploads$: Observable<string[]> = this.upload
        .asObservable()
        .pipe(scan((image: string[], upload: string) => [...image, upload], []));

    addUpload(): void {
        this.upload.next('assets/icons/icon-72x72.png');
    }

    getUploads$(): Observable<string[]> {
        return this.uploads$;
    }

    ngOnDestroy(): void {
        this.upload.complete();
    }
}
