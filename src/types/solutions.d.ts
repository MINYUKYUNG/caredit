interface ServiceSection {
  enTitle: string,
  koTitle: string,
  descriptionsTitle: string | null,
  descriptions: string[],
  offersTitle: string | null,
  offers: string[],
  connectedButtons: { image: string, url: string }[],
  image: string,
}

export { ServiceSection };
