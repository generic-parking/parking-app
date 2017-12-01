export class Filter {
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  filter: any;

  constructor(data, filter) {
    this.first = data.first;
    this.last = data.last;
    this.number = data.number;
    this.numberOfElements = data.numberOfElements;
    this.size = data.size;
    this.totalElements = data.totalElements;
    this.totalPages = data.totalPages;
    this.filter = filter;
  }
}
