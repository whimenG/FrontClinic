
export class TestClass {
  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get name(): string | undefined {
    return this._name;
  }

  set name(value: string | undefined) {
    this._name = value;
  }

  get surname(): string | undefined {
    return this._surname;
  }

  set surname(value: string | undefined) {
    this._surname = value;
  }

  get indification_number(): number | undefined {
    return this._indification_number;
  }

  set indification_number(value: number | undefined) {
    this._indification_number = value;
  }

  get address(): string | undefined {
    return this._address;
  }

  set address(value: string | undefined) {
    this._address = value;
  }

  get phone_number(): string | undefined {
    return this._phone_number;
  }

  set phone_number(value: string | undefined) {
    this._phone_number = value;
  }

  get online_Consultations(): boolean | undefined {
    return this._online_Consultations;
  }

  set online_Consultations(value: boolean | undefined) {
    this._online_Consultations = value;
  }

  get working_hours(): string | undefined {
    return this._working_hours;
  }

  set working_hours(value: string | undefined) {
    this._working_hours = value;
  }

  constructor(id: number | undefined, name: string | undefined, surname: string | undefined, indification_number: number | undefined, address: string | undefined, phone_number: string | undefined, online_Consultations: boolean | undefined, working_hours: string | undefined) {
    this._id = id;
    this._name = name;
    this._surname = surname;
    this._indification_number = indification_number;
    this._address = address;
    this._phone_number = phone_number;
    this._online_Consultations = online_Consultations;
    this._working_hours = working_hours;
  }

  private _id: number | undefined;
  private _name: string | undefined;
  private _surname: string | undefined;
  private _indification_number: number | undefined ;
  private _address: string | undefined;
  private _phone_number: string | undefined;
  private _online_Consultations: boolean | undefined;
  private _working_hours : string | undefined;

}
