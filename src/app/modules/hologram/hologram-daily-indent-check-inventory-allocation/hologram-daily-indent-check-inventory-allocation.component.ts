import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hologram-daily-indent-check-inventory-allocation',
  template:`
  <table class="table-bordered">
  <thead style="background:#2e5d74;color:white;">
  <th>Spoolbarcode</th>
  <th>Start Code</th>
  <th>End Code</th>
  </thead>
  <tr>
  <td>SDE3244EFERFE4GERE4T54GTR</td>
  <td>123456767</td>
  <td>34534654654754<td>
  </tr>
  </table>
  `,
  styleUrls: []
})
export class HologramDailyIndentCheckInventoryAllocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
