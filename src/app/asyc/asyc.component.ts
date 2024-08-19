import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointSimulationService } from '../services/endpoint-simulation.service';

@Component({
  selector: 'app-asyc',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './asyc.component.html',
  styleUrl: './asyc.component.scss',
})
export class AsycComponent {
  endpointSimulationService = inject(EndpointSimulationService);
  data$: Observable<any> = this.endpointSimulationService.hitEndPoint();
}
