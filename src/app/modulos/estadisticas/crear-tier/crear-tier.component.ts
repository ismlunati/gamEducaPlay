import { TierList } from '../model/TierList';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, UntypedFormArray } from '@angular/forms';
import { EstadisticasService } from '../estadisticas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tier-list',
  templateUrl: './crear-tier.component.html',
  styleUrls: ['../styles.css']
})
export class CrearTierComponent {
  tierListForm: UntypedFormGroup;
  
  idAsignatura!:number;

  constructor(private fb: UntypedFormBuilder, 
    private estadisticaService: EstadisticasService, 
    private route: ActivatedRoute,
    private router: Router) {

    this.idAsignatura= +this.route.snapshot.parent?.paramMap.get('id')!;

    this.tierListForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tiers: this.fb.array([])
    });
  }

  get tiers() {
    return this.tierListForm.get('tiers') as UntypedFormArray; // Cast to FormArray
  }

  addTier() {
    const tierGroup = this.fb.group({
      nombre: ['', Validators.required],
      color: ['#FFFFFF', Validators.required]  // Default color white
    });

    this.tiers.push(tierGroup);
  }

  removeTier(index: number) {
    this.tiers.removeAt(index); // Use removeAt instead of splice for FormArray
  }

  submit() {

    if (this.tierListForm.valid) {
      const tierListData = this.tierListForm.value;
      // We need to type tier explicitly
      tierListData.tiers.forEach((tier: { nombre: string; color: string; alumnos: any[] }) => {
        tier.alumnos = [];  // Ensure alumnos array is empty
      });

      console.log('Tier List to send:', tierListData);

      this.estadisticaService.postTierList(this.idAsignatura, this.tierListForm.value).subscribe((response:TierList) => {

        console.log("Post exitoso", response);
        this.router.navigate(['/asignaturas', this.idAsignatura, 'estadisticas', 'verTierList']);


      })

      // Aquí llamarías a tu servicio para enviar los datos a tu backend
    }
  }
}
