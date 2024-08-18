type NavigationType = { icon: string; label: string; link: string };
export type TNavigation = NavigationType & {
  subItem?: NavigationType[];
};

export type TLevel = {
  id: number;
  nameLevel: string;
};

export type TFiliere = {
  abreviation: string;
  extension: string;
};

export type TClasse = {
  id: number;
  nameClasses: string;
};

export type TCreneau = {
  id: number;
  Date: string;
  time: string;
  classesId: number;
  classes: TClasse;
};

export type TCreneauDto = {
  time: string;
  Date: string;
  classesId: number;
};
