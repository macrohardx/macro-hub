import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div class="wrapper">  
  <header ui-view="header" id="header" class="app-header clearfix"></header>
  <nav ui-view="sidebar" id="sidebar" class="app-nav"></nav>
  <main id="main" class="app-content">
    <ng-scrollbar #scrollable track="all" visibility="hover">
      <div ui-view="main"></div>
    </ng-scrollbar>
  </main>
  <footer ui-view="footer" id="footer" class="app-footer"></footer>
</div>`,
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent {
  title = 'MacroHub';
}
