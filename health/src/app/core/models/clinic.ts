export class Clinic {
  id: number;
  name: string;
  email: string;

  constructor(obj: PartialClinic = {}) {
    this.id = obj.id;
    this.name = obj.name;
    this.email = obj.email;
  }
}

type PartialClinic = Partial<Clinic>;
