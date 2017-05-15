import {UserPassport} from './passport';

export class Driver {

    constructor(
                public id: number,
                public firstName = '',
                public lastName = '',
                public patronymic ='',
                public dateofbirth = '',
                public photo ='',
                public gender ='',
                public passport: UserPassport = new UserPassport(),
                public address1?: string,
                public address2?: string,
                public phone?: string) { }
}