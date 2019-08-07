import { Clinic } from './clinic';
import { User } from './user';

export class ClinicUser extends User {
  clinic: Clinic;

  constructor(obj: PartialClinicUser = {}) {
    super(obj);
    this.clinic = new Clinic(obj.clinic ? obj.clinic : {});
  }
}

type PartialClinicUser = Partial<ClinicUser>;
