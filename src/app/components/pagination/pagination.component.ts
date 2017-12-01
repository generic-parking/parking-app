import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">‹</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">›</a></li>
  </ul>
</nav>
  `,
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() page: number;
  @Input() totalPage: number;
  @Output() selectedPage: number;

  constructor() { }

}
