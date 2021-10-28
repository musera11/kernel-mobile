export interface EthosCardType {
  _id: string;
  title: string;
}

export interface EthosCardWithDimension extends EthosCardType {
  dimension: string;
}

export interface EthosState {
  selectedCards: EthosCardType[];
  cards: EthosCardType[];
  cardsByDimension: EthosCardWithDimension[];
  lastTimeSelectedCardsByDimension: EthosCardWithDimension[] | EthosCardType[];
}
