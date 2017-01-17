import { Component } from '@angular/core';

@Component({
    selector:'pm-app',
    template:`<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">{{pageTitle}}</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a [routerLink]="['/welcome']" class="mdl-navigation__link" >Home</a>
        <a [routerLink]="['/products']" class="mdl-navigation__link" >Product List</a>
      </nav>
    </div>
  </header>
  <main class="mdl-layout__content">
    <div class="page-content">
        <router-outlet></router-outlet>
    </div>
  </main>
</div>
    `
})

export class AppComponent{
    pageTitle: String ='أقرء و ارتقي';
}