export class TodoItem {

  userId: number;
  id: number;
  title: string;
  completed: boolean;


  constructor() {
  }

  // todoItem -> qq outra coisa - http client ocupa se disto em JSON, logo return do pp objeto.
  // se fosse SOAP, ou outra coisa qq, em vez de json seria esse formato
  serialize(): any {
    return this;
  }

  deserialize(input: any): TodoItem {
    return Object.assign(this, input);
  }

}
