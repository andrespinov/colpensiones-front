export class IndependentWorkerModel {
    public birthdate: Date | string = '';
    public email: string = '';
    public documentNumber: number = null;
    public documentType: string = '';
    public fullName: string = '';
    public gender: string = '';
    public job: string = '';
    public monthlyIncome: number = null;
    public telephone: number = null;

    public constructor(item?: IndependentWorkerModel) {
        if (item) {
            this.birthdate = item.birthdate;
            this.email = item.email;
            this.documentNumber = item.documentNumber;
            this.documentType = item.documentType;
            this.fullName = item.fullName;
            this.gender = item.gender;
            this.job = item.job;
            this.monthlyIncome = item.monthlyIncome;
            this.telephone = item.telephone;
        }
    }
}
