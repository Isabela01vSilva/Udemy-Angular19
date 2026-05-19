import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  static REPO_CLIENTE = '_CLIENTES';

  constructor() {}

  salvar(cliente: Cliente) {
    const storage = this.obterStorage();

    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTE, JSON.stringify(storage));
  }

  atualizar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.forEach(c => {
      if (c.id === cliente.id) {
        Object.assign(c, cliente);
      }
    })
    localStorage.setItem(ClienteService.REPO_CLIENTE, JSON.stringify(storage));
  }

  deletar(cliente: Cliente) {
    const storage = this.obterStorage();
    const novaLista = storage.filter(c => c.id !== cliente.id);

    const indexItem = storage.indexOf(cliente);
    
    if (indexItem > -1) {
      storage.splice(indexItem, 1);
    }
    
    localStorage.setItem(ClienteService.REPO_CLIENTE, JSON.stringify(novaLista));
  }

  pesquisarClientes(nomeBusca: string): Cliente[] {
    const clientes = this.obterStorage();

    if (!nomeBusca) {
      return clientes;
    }

    return clientes.filter((cliente) => cliente.nome?.indexOf(nomeBusca) !== -1);
  }

  buscarClientePorId(id: string): Cliente | undefined {
    const clientes = this.obterStorage();

    return clientes.find(clientes => clientes.id === id);
  }

  private obterStorage(): Cliente[] {
    const repositorioClientes = localStorage.getItem(
      ClienteService.REPO_CLIENTE,
    );

    if (repositorioClientes) {
      const clientes: Cliente[] = JSON.parse(repositorioClientes) as Cliente[];
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTE, JSON.stringify(clientes));
    return clientes;
  }
}
