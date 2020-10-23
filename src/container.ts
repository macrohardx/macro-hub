import { Container, injectable } from 'inversify';
import 'reflect-metadata';
import { TYPES } from './types'

export interface iFoo {
    sayHello(): void;
}

@injectable()
class Foo implements iFoo {

    sayHello() {
        console.log('hello');
    }
}


const container = new Container();
container.bind<iFoo>(TYPES.Foo).to(Foo);
export { container };