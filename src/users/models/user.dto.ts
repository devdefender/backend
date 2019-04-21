export class UserDto {
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly mobile: string;
  readonly location?: string;
  readonly geoLocation?: string[];
  readonly copmanies?: object[];
  readonly socialMediaLinks?: object[];
  readonly reputation?: number = 0;
  readonly verified?: boolean = false;
}
