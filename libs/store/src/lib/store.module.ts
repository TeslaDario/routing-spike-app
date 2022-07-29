import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreEffects } from './store.effects';
import { StoreFacade } from './store.facade';
import * as fromAppStore from './store.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(fromAppStore.STORE_FEATURE_KEY, fromAppStore.storeReducer),
        EffectsModule.forFeature([StoreEffects]),
    ],
    providers: [StoreFacade],
})
export class AppStoreModule {}
