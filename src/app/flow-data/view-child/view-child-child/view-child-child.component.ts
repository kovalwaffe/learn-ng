import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewChildChildComponent {
  public childValue = "Hello Im child !";

}
