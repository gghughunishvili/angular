export class Employee {
    constructor (
        public firstname: string,
        public lastname: string,
        public isFulltime: boolean,
        public paymentType: string,
        public primaryLanguage: string
    ) {}
}