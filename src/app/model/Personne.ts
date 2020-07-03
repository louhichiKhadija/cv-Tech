export class Personne{
    id: number;
    name: string ;
    firstName: string;
    age: number;
    path: string;
    cin: number;
    description: string;s
    job: string;

    

    constructor(id,name,firstName,age, path,cin,description,job){
        this.id=id
        this.name=name
        this.firstName=firstName
        this.path=path
        this.cin=cin
        this.description=description
        this.job=job
        this.age=age
    }
}