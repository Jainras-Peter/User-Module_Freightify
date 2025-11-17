import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  imports: [MenubarModule,
            RouterModule,
            
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Analytics', routerLink: '/mycompany' },
      { label: 'RateSearch', routerLink: '/mycompany' },
      { label: 'Enquiries', routerLink: '/mycompany' },
      { label: 'Quotes', routerLink: '/quotes' },
      { label: 'MyCompany', 
        items:[
          {label: 'Users', routerLink: '/users'}
          
        ]
       },
      
    ];
  }

}
