export class Driver {

    constructor(public firstName = '',
                public lastName = '',
                public patronymic ='',
                public dateofbirth = '',
                public photo ='',
                public sex ='',
                public passportseries = '',
                public passportnumber = '',
                public passportdate = '',
                public passportbywhom = '',
                public addressType = 'home',
                public street1?: string,
                public street2?: string,
                public phone?: string) { }
}