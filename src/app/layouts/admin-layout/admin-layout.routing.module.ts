import { LoginComponent } from './../views/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

import { NgModule } from '@angular/core';

export const AdminLayoutRoutes: Routes = [

  {path: '', component: LoginComponent},
  
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'cliente', loadChildren: '../views/cliente/cliente.module#ClienteModule' },
      { path: 'fornecedor', loadChildren: '../views/fornecedor/fornecedor.module#FornecedorModule' },
      { path: 'categoria', loadChildren: '../views/categoria/categoria.module#CategoriaModule' },
      { path: 'endereco', loadChildren: '../views/endereco/endereco.module#EnderecoModule' },
      { path: 'produto', loadChildren: '../views/produto/produto.module#ProdutoModule' },
      { path: 'usuario', loadChildren: '../views/usuario/usuario.module#UsuarioModule' },
      { path: 'tipocliente', loadChildren: '../views/tipocliente/tipocliente.module#TipoClienteModule' },
      { path: 'movimentacaoentrada', loadChildren: '../views/movimentacaoentrada/movimentacaoentrada.module#MovimentacaoEntradaModule' },
      { path: 'produtopreco', loadChildren: '../views/produto-preco/produto-preco.module#ProdutoPrecoModule' },
      { path: 'cidade', loadChildren: '../views/cidade/cidade.module#CidadeModule' },
      { path: 'notafiscalentrada', loadChildren: '../views/notafiscal/notafiscal.module#NotaFiscalModule' },
      { path: 'vendas', loadChildren: '../views/vendas/vendas.module#VendasModule' },
    ],

  }

];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRoutes)],
  exports: [RouterModule]
})

export class AdminLayoutRoutingModule {

}

