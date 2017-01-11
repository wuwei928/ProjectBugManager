import { Injectable } from '@angular/core'

@Injectable()
export class ShareService {
    public isLoading: boolean = false;
    public pageTitle: string = 'test';
}