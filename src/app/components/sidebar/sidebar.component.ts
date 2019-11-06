import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/usuario', title: 'Usuario', icon: 'fingerprint', class: '' },
  { path: '/cidade', title: 'Cidade', icon: 'location_city', class: '' },
  { path: '/endereco', title: 'Endereco', icon: 'location_on', class: '' },
  { path: '/fornecedor', title: 'Fornecedor', icon: 'work', class: '' },
  //{ path: '/tipocliente', title: 'Tipo de Cliente', icon: 'supervised_user_circle', class: '' },
  { path: '/cliente', title: 'Cliente', icon: 'person', class: '' },
  { path: '/categoria', title: 'Categoria', icon: 'dns', class: '' },
  { path: '/produto', title: 'Produto', icon: 'add_shopping_cart', class: '' },
  { path: '/produtopreco', title: 'Preço do Produto', icon: 'money', class: '' },
  { path: '/movimentacaoentrada', title: 'Entrada', icon: 'add_to_photos', class: '' },
  { path: '/vendas', title: 'Vendas', icon: 'money', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
