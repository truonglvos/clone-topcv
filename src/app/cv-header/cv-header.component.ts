import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ICVHeader } from '../models/cv-header.model';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvHeaderComponent implements OnInit {
  @Input() cVHeader!: ICVHeader;
  constructor() {}

  ngOnInit(): void {}
}
