const CHURCH_SEASONS = {
  LENT: "lent",
  ADVENT: "advent",
  EASTER: "easter",
  CHRISTMAS: "christmas",
  ORDRINARY_TIME: "ordinary",
} as const;

type ChurchSeasons = (typeof CHURCH_SEASONS)[keyof typeof CHURCH_SEASONS];

export { CHURCH_SEASONS, type ChurchSeasons };
