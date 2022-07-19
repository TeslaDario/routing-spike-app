import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreStoreEffects } from './core-store.effects';
import { CoreStoreFacade } from './core-store.facade';
import * as fromCoreStore from './core-store.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(fromCoreStore.CORE_STORE_FEATURE_KEY, fromCoreStore.coreStoreReducer),
        EffectsModule.forFeature([CoreStoreEffects]),
    ],
    providers: [CoreStoreFacade],
})
export class CoreStoreModule {}
